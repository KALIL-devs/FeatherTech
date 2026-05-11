<?php
// Debug script - run from CLI: php debug_contact.php
error_reporting(E_ALL);
ini_set('display_errors', 1);

echo "=== Step 1: Load secret.php ===\n";
$_secretsFile = dirname(dirname(dirname(__DIR__))) . '/secret.php';
echo "Path: $_secretsFile\n";
if (!file_exists($_secretsFile)) {
    die("FAIL: secret.php not found at $_secretsFile\n");
}
$_secrets = require $_secretsFile;
echo "OK: secret.php loaded\n\n";

$GOOGLE_SERVICE_ACCOUNT_EMAIL = $_secrets['GOOGLE_SERVICE_ACCOUNT_EMAIL'];
$GOOGLE_PRIVATE_KEY            = $_secrets['GOOGLE_PRIVATE_KEY'];
$GOOGLE_SHEET_ID               = $_secrets['GOOGLE_SHEET_ID'];

echo "Email: $GOOGLE_SERVICE_ACCOUNT_EMAIL\n";
echo "Sheet ID: $GOOGLE_SHEET_ID\n";
echo "Key starts: " . substr($GOOGLE_PRIVATE_KEY, 0, 40) . "...\n\n";

echo "=== Step 2: OpenSSL extensions ===\n";
echo "openssl loaded: " . (extension_loaded('openssl') ? 'YES' : 'NO') . "\n";
echo "curl loaded: "    . (extension_loaded('curl')    ? 'YES' : 'NO') . "\n\n";

echo "=== Step 3: Load private key ===\n";
$privateKey = str_replace('\\n', "\n", $GOOGLE_PRIVATE_KEY);
$pkeyId = openssl_pkey_get_private($privateKey);
if (!$pkeyId) {
    $err = '';
    while ($msg = openssl_error_string()) $err .= $msg . "\n";
    die("FAIL: Cannot load private key.\nOpenSSL errors:\n$err\n");
}
echo "OK: Private key loaded\n\n";

echo "=== Step 4: Sign JWT ===\n";
function base64url_encode(string $data): string {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}
$now       = time();
$jwtHeader = base64url_encode(json_encode(['alg' => 'RS256', 'typ' => 'JWT']));
$jwtClaims = base64url_encode(json_encode([
    'iss'   => $GOOGLE_SERVICE_ACCOUNT_EMAIL,
    'scope' => 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file',
    'aud'   => 'https://oauth2.googleapis.com/token',
    'iat'   => $now,
    'exp'   => $now + 3600,
]));
$signingInput = $jwtHeader . '.' . $jwtClaims;
$signature = '';
if (!openssl_sign($signingInput, $signature, $pkeyId, OPENSSL_ALGO_SHA256)) {
    die("FAIL: openssl_sign failed\n");
}
$jwt = $signingInput . '.' . base64url_encode($signature);
echo "OK: JWT signed\n\n";

echo "=== Step 5: Exchange JWT for access token ===\n";
$ch = curl_init('https://oauth2.googleapis.com/token');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => http_build_query([
        'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        'assertion'  => $jwt,
    ]),
    CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
    CURLOPT_TIMEOUT    => 15,
    CURLOPT_SSL_VERIFYPEER => true,
]);
$tokenBody   = curl_exec($ch);
$tokenStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError   = curl_error($ch);
curl_close($ch);

if ($tokenBody === false) {
    die("FAIL: cURL error: $curlError\n");
}
echo "HTTP Status: $tokenStatus\n";
echo "Response: $tokenBody\n\n";

$tokenData   = json_decode($tokenBody, true);
$accessToken = $tokenData['access_token'] ?? null;
if (!$accessToken) {
    die("FAIL: No access token in response\n");
}
echo "OK: Access token obtained\n\n";

echo "=== Step 6: Append row to Google Sheets ===\n";
$tz      = new DateTimeZone('Asia/Kolkata');
$dateStr = (new DateTime('now', $tz))->format('d/m/Y, h:i:s A');
$rowData = ['values' => [[$dateStr, 'Test Name', '9999999999', 'test@test.com', '-', 'Test Course', 'Debug test message', 'Debug Script']]];

$sheetsUrl = 'https://sheets.googleapis.com/v4/spreadsheets/' . urlencode($GOOGLE_SHEET_ID) . '/values/Sheet1%21A%3AH:append?valueInputOption=USER_ENTERED';

$ch = curl_init($sheetsUrl);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($rowData),
    CURLOPT_HTTPHEADER     => [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $accessToken,
    ],
    CURLOPT_TIMEOUT => 15,
]);
$sheetsBody   = curl_exec($ch);
$sheetsStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$sheetsError  = curl_error($ch);
curl_close($ch);

echo "HTTP Status: $sheetsStatus\n";
echo "Response: $sheetsBody\n";
if ($sheetsStatus >= 200 && $sheetsStatus < 300) {
    echo "\nSUCCESS: Row appended to Google Sheet!\n";
} else {
    echo "\nFAIL: Sheets API returned error\n";
}
