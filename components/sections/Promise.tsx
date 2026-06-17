const pillars = [
  { num: "I", title: "Tailored", sub: "Every itinerary built around you" },
  { num: "II", title: "Researched", sub: "Neighborhoods, timing & logistics" },
  { num: "III", title: "Organized", sub: "Day-by-day plan & budget" },
  { num: "IV", title: "Effortless", sub: "Delivered ready to travel" },
];

export default function Promise() {
  return (
    <div style={{ background: "#0E3B3A", color: "#F6F1E7" }}>
      <div className="voy-promise-grid">
        {pillars.map((p, i) => (
          <div
            key={p.num}
            className="pp"
            style={{
              padding: "46px 30px",
              textAlign: "center",
              borderRight:
                i < pillars.length - 1 ? "1px solid rgba(220,192,129,0.18)" : "none",
              transition: "background 0.3s ease",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                color: "#C9A24B",
                marginBottom: 6,
                letterSpacing: "0.04em",
              }}
            >
              {p.num}
            </div>
            <h3 style={{ color: "#F6F1E7", fontSize: "1.12rem", marginBottom: 6 }}>
              {p.title}
            </h3>
            <span style={{ fontSize: "0.86rem", opacity: 0.78, fontWeight: 300, letterSpacing: "0.02em" }}>
              {p.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
