const payments = [
  { course: "Full-Stack Web Development",  amount: 14000, date: "2024-09-01", status: "Paid",    ref: "FTI-PAY-0091" },
  { course: "Full-Stack Web Development",  amount: 14000, date: "2024-10-01", status: "Paid",    ref: "FTI-PAY-0134" },
  { course: "UPSC Civil Services",          amount: 22500, date: "2024-11-01", status: "Paid",    ref: "FTI-PAY-0198" },
  { course: "UPSC Civil Services",          amount: 22500, date: "2024-12-01", status: "Pending", ref: "FTI-PAY-0241" },
];

export default function FeeTable() {
  return (
    <div>
      <h2 style={{
        fontFamily: "var(--font-playfair), Georgia, serif",
        fontSize: "22px", fontWeight: 700,
        color: "#1A1A1A", marginBottom: "20px",
      }}>Fee Payment History</h2>

      <div style={{ borderRadius: "14px", border: "1px solid #E8E4DC", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
          <thead>
            <tr style={{ backgroundColor: "#1F3D2E" }}>
              {["Course", "Reference", "Date", "Amount", "Status"].map((h) => (
                <th key={h} style={{
                  padding: "13px 18px", textAlign: "left",
                  fontSize: "10.5px", fontWeight: 600,
                  letterSpacing: "1px", textTransform: "uppercase",
                  color: "#D2FF3A",
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payments.map((p, i) => (
              <tr key={i} style={{
                backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#FAFAF8",
                borderBottom: "1px solid #F0EFE9",
              }}>
                <td style={{ padding: "13px 18px", fontSize: "13px", fontWeight: 500, color: "#1A1A1A" }}>{p.course}</td>
                <td style={{ padding: "13px 18px", fontSize: "12px", color: "#6B7280", fontFamily: "var(--font-geist-mono), monospace" }}>{p.ref}</td>
                <td style={{ padding: "13px 18px", fontSize: "12.5px", color: "#6B7280" }}>
                  {new Date(p.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                </td>
                <td style={{ padding: "13px 18px", fontSize: "14px", fontWeight: 700, color: "#1F3D2E" }}>
                  ₹{p.amount.toLocaleString("en-IN")}
                </td>
                <td style={{ padding: "13px 18px" }}>
                  <span style={{
                    display: "inline-block", padding: "4px 12px", borderRadius: "99px",
                    fontSize: "11px", fontWeight: 600,
                    backgroundColor: p.status === "Paid" ? "rgba(210,255,58,0.25)" : "rgba(251,191,36,0.18)",
                    color: p.status === "Paid" ? "#1F3D2E" : "#92400e",
                    border: p.status === "Paid" ? "1px solid rgba(31,61,46,0.2)" : "1px solid rgba(251,191,36,0.3)",
                  }}>
                    {p.status === "Paid" ? "✓ " : "⏳ "}{p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr style={{ backgroundColor: "#F0EFE9" }}>
              <td colSpan={3} style={{ padding: "12px 18px", fontSize: "12px", fontWeight: 600, color: "#6B7280", textAlign: "right" }}>Total Paid</td>
              <td style={{ padding: "12px 18px", fontSize: "15px", fontWeight: 700, color: "#1F3D2E" }}>
                ₹{payments.filter(p => p.status === "Paid").reduce((s, p) => s + p.amount, 0).toLocaleString("en-IN")}
              </td>
              <td />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
