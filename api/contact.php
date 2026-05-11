<?php
// ============================================================
// CONFIG — loaded from a secrets file outside the web root.
// File path: /home/<site-user>/secret.php  (NOT inside htdocs/)
//
// That file should contain:
//   <?php
//   return [
//       'GOOGLE_SERVICE_ACCOUNT_EMAIL' => 'your@project.iam.gserviceaccount.com',
//       'GOOGLE_PRIVATE_KEY'           => "-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n",
//       'GOOGLE_SHEET_ID'              => 'your_sheet_id_here',
//   ];
// ============================================================
$_secretsFile = dirname(dirname(dirname(__DIR__))) . '/secret.php';   // /home/radhadev-feathertech-preprod/secret.php
$_secrets     = file_exists($_secretsFile) ? require $_secretsFile : [];

$GOOGLE_SERVICE_ACCOUNT_EMAIL = $_secrets['GOOGLE_SERVICE_ACCOUNT_EMAIL'] ?? getenv('GOOGLE_SERVICE_ACCOUNT_EMAIL');
$GOOGLE_PRIVATE_KEY            = $_secrets['GOOGLE_PRIVATE_KEY']           ?? getenv('GOOGLE_PRIVATE_KEY');
$GOOGLE_SHEET_ID               = $_secrets['GOOGLE_SHEET_ID']              ?? getenv('GOOGLE_SHEET_ID');
// ============================================================

// CORS — adjust origin to your frontend domain in production
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// ── Read & decode JSON body ──────────────────────────────────
$rawBody = file_get_contents('php://input');
$body    = json_decode($rawBody, true);

if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON body.']);
    exit;
}

$fullName = isset($body['fullName']) && $body['fullName'] !== '' ? $body['fullName'] : '-';
$mobile   = isset($body['mobile'])   && $body['mobile']   !== '' ? $body['mobile']   : '-';
$email    = isset($body['email'])    && $body['email']    !== '' ? $body['email']    : '-';
$location = isset($body['location']) && $body['location'] !== '' ? $body['location'] : '-';
$intent   = isset($body['intent'])   && $body['intent']   !== '' ? $body['intent']   : '-';
$message  = isset($body['message'])  && $body['message']  !== '' ? $body['message']  : '-';
$source   = isset($body['source'])   && $body['source']   !== '' ? $body['source']   : 'Unknown Form';

// ── Validate config ──────────────────────────────────────────
if (!$GOOGLE_SERVICE_ACCOUNT_EMAIL || !$GOOGLE_PRIVATE_KEY || !$GOOGLE_SHEET_ID) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server configuration error in Google Sheets configuration.']);
    exit;
}

// ── Build date string (IST) ──────────────────────────────────
$tz      = new DateTimeZone('Asia/Kolkata');
$dateStr = (new DateTime('now', $tz))->format('d/m/Y, h:i:s A');

// ── Google Service Account JWT Auth ─────────────────────────
// Normalise private key: replace literal "\n" sequences with real newlines
$privateKey = str_replace('\\n', "\n", $GOOGLE_PRIVATE_KEY);

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
$signature    = '';

$pkeyId = openssl_pkey_get_private($privateKey);
if (!$pkeyId) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to load private key.']);
    exit;
}

if (!openssl_sign($signingInput, $signature, $pkeyId, OPENSSL_ALGO_SHA256)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to sign JWT.']);
    exit;
}

$jwt = $signingInput . '.' . base64url_encode($signature);

// ── Exchange JWT for access token ────────────────────────────
$tokenResponse = http_post('https://oauth2.googleapis.com/token', http_build_query([
    'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    'assertion'  => $jwt,
]), 'application/x-www-form-urlencoded');

if (!$tokenResponse['ok']) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to obtain Google access token.', 'error' => $tokenResponse['body']]);
    exit;
}

$tokenData   = json_decode($tokenResponse['body'], true);
$accessToken = $tokenData['access_token'] ?? null;

if (!$accessToken) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Access token missing from Google response.']);
    exit;
}

// ── Append row to Google Sheets ──────────────────────────────
// Columns A–H: Date, Full Name, Mobile, Email, Location, Intent/Service, Message, Source Form
$sheetsUrl = 'https://sheets.googleapis.com/v4/spreadsheets/'
    . urlencode($GOOGLE_SHEET_ID)
    . '/values/Sheet1%21A%3AH:append?valueInputOption=USER_ENTERED';

$rowData = [
    'values' => [[
        $dateStr,
        $fullName,
        $mobile,
        $email,
        $location,
        $intent,
        $message,
        $source,
    ]],
];

$sheetsResponse = http_post(
    $sheetsUrl,
    json_encode($rowData),
    'application/json',
    ['Authorization: Bearer ' . $accessToken]
);

if (!$sheetsResponse['ok']) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to write to Google Sheets.', 'error' => $sheetsResponse['body']]);
    exit;
}

echo json_encode(['success' => true, 'message' => 'Message securely saved to Google Sheets.']);
exit;

// ── Helpers ──────────────────────────────────────────────────

function base64url_encode(string $data): string {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

/**
 * Simple HTTP POST using cURL.
 * Returns ['ok' => bool, 'status' => int, 'body' => string]
 */
function http_post(string $url, string $body, string $contentType, array $extraHeaders = []): array {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $body,
        CURLOPT_HTTPHEADER     => array_merge(
            ['Content-Type: ' . $contentType],
            $extraHeaders
        ),
        CURLOPT_TIMEOUT        => 15,
    ]);
    $response   = curl_exec($ch);
    $statusCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError  = curl_error($ch);
    curl_close($ch);

    if ($response === false) {
        return ['ok' => false, 'status' => 0, 'body' => $curlError];
    }

    return ['ok' => $statusCode >= 200 && $statusCode < 300, 'status' => $statusCode, 'body' => $response];
}
