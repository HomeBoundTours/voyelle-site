import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Voyelle.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ color: "#6B7488", fontSize: "0.9rem", fontWeight: 300, marginBottom: 8 }}>
          Last updated: [DATE] · [LEGAL BUSINESS NAME] ("Voyelle," "we," "us")
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
          This is a first-draft template, not legal advice. Have a licensed attorney confirm which privacy laws apply to you (e.g. GDPR, CCPA) and adapt this before publishing. Replace every [bracketed] item.
        </div>

        <h2 style={h2}>1. What we collect</h2>
        <p style={p}>
          Information you provide through our intake form, consultations, and correspondence: name, email, phone, travel preferences, traveler details, and trip information. For booking, we may need passport details. We do not ask you to enter card numbers or passwords into our website forms.
        </p>

        <h2 style={h2}>2. How we use it</h2>
        <ul style={{ margin: "10px 0 10px 4px", paddingLeft: 22 }}>
          {[
            "To plan, research, design, and (where applicable) book your trip.",
            "To communicate with you about your inquiry, itinerary, and bookings.",
            "To send relevant follow-ups; you can opt out of marketing at any time.",
          ].map((item) => (
            <li key={item} style={{ margin: "7px 0", fontWeight: 300 }}>{item}</li>
          ))}
        </ul>

        <h2 style={h2}>3. How we share it</h2>
        <p style={p}>
          We share only what is necessary with the third-party suppliers required to fulfill your bookings (e.g., a hotel or tour operator), and with service providers that help us operate (e.g., our form and email tools). We do not sell your personal information.
        </p>

        <h2 style={h2}>4. How we protect and keep it</h2>
        <ul style={{ margin: "10px 0 10px 4px", paddingLeft: 22 }}>
          {[
            "We keep client information within our working systems and limit access to it.",
            "We retain your information for as long as needed to serve you and meet legal obligations, then delete it.",
            "No method of transmission or storage is perfectly secure; we cannot guarantee absolute security.",
          ].map((item) => (
            <li key={item} style={{ margin: "7px 0", fontWeight: 300 }}>{item}</li>
          ))}
        </ul>

        <h2 style={h2}>5. Your rights</h2>
        <p style={p}>
          You may request access to, correction of, or deletion of your personal information, and may opt out of marketing. Depending on where you live (e.g., EU/UK GDPR, California CCPA), you may have additional rights. [Attorney to confirm which apply.] Contact us at{" "}
          <a href="mailto:aaron3534@outlook.com" style={{ color: "#0E3B3A", fontWeight: 500, borderBottom: "1px solid #C9A24B" }}>
            aaron3534@outlook.com
          </a>
          .
        </p>

        <h2 style={h2}>6. Contact</h2>
        <p style={p}>
          Questions about this policy or your data: [LEGAL BUSINESS NAME], [ADDRESS],{" "}
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
          <Link href="/terms" style={{ color: "#6B7488" }}>Terms of Service</Link> &nbsp;·&nbsp;{" "}
          <Link href="/" style={{ color: "#6B7488" }}>Home</Link>
        </div>
      </div>
    </main>
  );
}
