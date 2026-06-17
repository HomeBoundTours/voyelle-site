import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Voyelle.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  const h2: React.CSSProperties = {
    fontFamily: "var(--font-serif)",
    color: "#0E3B3A",
    fontSize: "1.35rem",
    fontWeight: 600,
    margin: "34px 0 6px",
  };
  const p: React.CSSProperties = { margin: "8px 0", fontWeight: 300 };

  return (
    <main style={{ background: "#F6F1E7", minHeight: "100vh" }}>
      {/* Top bar */}
      <div style={{ background: "#0A2D2C", padding: "18px 0" }}>
        <div
          style={{
            maxWidth: 780,
            margin: "0 auto",
            padding: "0 26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            aria-label="Home"
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 600,
              fontSize: "1.55rem",
              color: "#F6F1E7",
              letterSpacing: "0.02em",
            }}
          >
            Voyelle
          </Link>
          <Link
            href="/"
            style={{ color: "#F6F1E7", fontSize: "0.8rem", letterSpacing: "0.06em", opacity: 0.9 }}
          >
            ← Back to site
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "64px 26px 40px" }}>
        <span
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.26em",
            fontSize: "0.7rem",
            fontWeight: 600,
            color: "#C9A24B",
          }}
        >
          Legal
        </span>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            color: "#0E3B3A",
            fontSize: "clamp(2rem,4vw,2.8rem)",
            fontWeight: 600,
            lineHeight: 1.1,
            margin: "12px 0 8px",
            letterSpacing: "-0.01em",
          }}
        >
          Terms of Service
        </h1>
        <p style={{ color: "#6B7488", fontSize: "0.9rem", fontWeight: 300, marginBottom: 8 }}>
          Last updated: [DATE] · [LEGAL BUSINESS NAME] ("Voyelle," "we," "us") · Jurisdiction: [STATE/COUNTRY]
        </p>
        <div style={{ height: 1, background: "#C9A24B", opacity: 0.6, margin: "26px 0 30px" }} />

        <div
          style={{
            background: "#F6F1E7",
            borderLeft: "3px solid #C9A24B",
            padding: "16px 20px",
            fontSize: "0.9rem",
            color: "#6B7488",
            fontStyle: "italic",
            marginBottom: 34,
            borderRadius: "0 4px 4px 0",
          }}
        >
          This is a first-draft template, not legal advice, and is not guaranteed to be compliant or enforceable in your jurisdiction. Have a licensed attorney review and adapt it, and replace every [bracketed] item, before relying on it.
        </div>

        <h2 style={h2}>1. Our services</h2>
        <p style={p}>
          Voyelle provides travel planning, research, itinerary design, and — for applicable packages — booking coordination. We act as a planning service and, where we book on your behalf, as your agent in arranging reservations with third-party suppliers (airlines, hotels, tour operators, etc.).
        </p>

        <h2 style={h2}>2. Packages, fees, and deposits</h2>
        <ul style={{ margin: "10px 0 10px 4px", paddingLeft: 22 }}>
          {[
            "Fees are as quoted at the time you engage us and confirmed in writing.",
            "A 50% non-refundable planning deposit secures your start date; the balance is due at itinerary delivery.",
            "Package fees cover planning time only — not the cost of flights, hotels, activities, taxes, or supplier fees.",
            "Revisions beyond your package's included number are billed at $50 each (or as quoted).",
          ].map((item) => (
            <li key={item} style={{ margin: "7px 0", fontWeight: 300 }}>{item}</li>
          ))}
        </ul>

        <h2 style={h2}>3. Bookings and third-party suppliers</h2>
        <p style={p}>
          All travel services are provided by independent third-party suppliers and are subject to their own terms, pricing, and cancellation policies. We do not own or control these suppliers and are not liable for their acts, omissions, delays, cancellations, or changes. Prices and availability are not guaranteed until confirmed by the supplier.
        </p>

        <h2 style={h2}>4. Cancellations and refunds</h2>
        <ul style={{ margin: "10px 0 10px 4px", paddingLeft: 22 }}>
          {[
            "Planning deposits are non-refundable once work has begun.",
            "Supplier cancellations and refunds follow each supplier's own policy.",
            "We strongly recommend travel insurance; [we can / cannot] arrange a quote on request.",
          ].map((item) => (
            <li key={item} style={{ margin: "7px 0", fontWeight: 300 }}>{item}</li>
          ))}
        </ul>

        <h2 style={h2}>5. Your responsibilities</h2>
        <ul style={{ margin: "10px 0 10px 4px", paddingLeft: 22 }}>
          {[
            "Provide accurate traveler information, including names exactly as they appear on passports.",
            "Ensure passports, visas, and entry requirements are valid and met (we can advise, but you are responsible).",
            "Review and approve your itinerary; confirm time-sensitive bookings when prompted.",
          ].map((item) => (
            <li key={item} style={{ margin: "7px 0", fontWeight: 300 }}>{item}</li>
          ))}
        </ul>

        <h2 style={h2}>6. Limitation of liability</h2>
        <p style={p}>
          To the fullest extent permitted by law, our total liability for any claim arising from our services is limited to the planning fees you paid us for the affected trip. We are not liable for indirect, incidental, or consequential damages, or for events outside our reasonable control (force majeure). [Attorney to tailor.]
        </p>

        <h2 style={h2}>7. Governing law</h2>
        <p style={p}>
          These terms are governed by the laws of [STATE/COUNTRY], without regard to conflict-of-laws rules. [Add dispute-resolution / arbitration clause if desired — attorney to advise.]
        </p>

        <h2 style={h2}>8. Contact</h2>
        <p style={p}>
          Questions about these terms: [LEGAL BUSINESS NAME], [ADDRESS],{" "}
          <a href="mailto:aaron3534@outlook.com" style={{ color: "#0E3B3A", fontWeight: 500, borderBottom: "1px solid #C9A24B" }}>
            aaron3534@outlook.com
          </a>
          .
        </p>

        <div
          style={{
            borderTop: "1px solid #E7E1D4",
            marginTop: 46,
            padding: "26px 0 60px",
            color: "#6B7488",
            fontSize: "0.84rem",
            fontWeight: 300,
          }}
        >
          &copy; {new Date().getFullYear()} Voyelle. All rights reserved. &nbsp;·&nbsp;{" "}
          <Link href="/privacy" style={{ color: "#6B7488" }}>Privacy Policy</Link> &nbsp;·&nbsp;{" "}
          <Link href="/" style={{ color: "#6B7488" }}>Home</Link>
        </div>
      </div>
    </main>
  );
}
