import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get a Custom Travel Itinerary",
  description:
    "Tell us your trip; we design a custom, day-by-day itinerary built around you. Researched, organized, and ready to travel. Start your request — reply within one business day.",
  robots: { index: false, follow: true },
};

export default function PlanPage() {
  return (
    <>
      {/* Top bar */}
      <div style={{ background: "#0A2D2C", padding: "16px 0" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
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
          <span
            style={{
              color: "#F6F1E7",
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "0.92rem",
              opacity: 0.85,
            }}
          >
            The world, thoughtfully arranged.
          </span>
        </div>
      </div>

      {/* Hero + Form */}
      <section
        style={{
          position: "relative",
          color: "#F6F1E7",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(10,45,44,0.86),rgba(10,45,44,0.92)), url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80') center/cover no-repeat",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1120,
            margin: "0 auto",
            padding: "54px 26px 60px",
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 54,
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "#DCC081",
              }}
            >
              Custom travel itineraries
            </span>
            <h1
              style={{
                color: "#F6F1E7",
                fontSize: "clamp(2.1rem,4vw,3.2rem)",
                margin: "10px 0 18px",
                maxWidth: "16ch",
                fontFamily: "var(--font-serif)",
              }}
            >
              Your perfect trip, planned for you.
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 300,
                color: "rgba(247,244,236,0.92)",
                maxWidth: "48ch",
                marginBottom: 26,
              }}
            >
              Tell us your dates, budget, and style. We research and design a custom, day-by-day itinerary built entirely around you — and deliver it ready to travel.
            </p>
            <ul style={{ listStyle: "none", margin: "0 0 8px" }}>
              {[
                "Researched & organized by travel experts",
                "Day-by-day plan, budget, and bookings handled",
                "Honeymoons, families, adventures & more",
                "We reply within one business day",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    padding: "9px 0 9px 32px",
                    position: "relative",
                    fontWeight: 300,
                    fontSize: "1.02rem",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 15,
                      width: 14,
                      height: 7,
                      borderLeft: "2px solid #C9A24B",
                      borderBottom: "2px solid #C9A24B",
                      transform: "rotate(-45deg)",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Compact form */}
          <PlanForm />
        </div>
      </section>

      {/* Trust band */}
      <div style={{ background: "#F6F1E7", padding: "46px 0" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 26px",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 30,
            textAlign: "center",
          }}
        >
          {[
            { h: "You share", p: "One short form with your dates, budget, and style." },
            { h: "We design", p: "A researched, realistic, day-by-day itinerary around you." },
            { h: "You travel", p: "Everything organized and delivered, ready to go." },
          ].map((b) => (
            <div key={b.h}>
              <h3 style={{ fontSize: "1.15rem", marginBottom: 6 }}>{b.h}</h3>
              <p style={{ color: "#6B7488", fontWeight: 300, fontSize: "0.92rem" }}>{b.p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Packages mini */}
      <section style={{ padding: "56px 0" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 26px" }}>
          <h2 style={{ textAlign: "center", fontSize: "1.9rem", marginBottom: 6 }}>
            Simple, transparent pricing
          </h2>
          <p style={{ textAlign: "center", color: "#6B7488", fontWeight: 300, marginBottom: 34 }}>
            Pick your level of support. Package fees cover planning, not the trip&apos;s own costs.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 22,
            }}
          >
            {[
              { name: "Trip Spark", price: "$150", unit: "flat", desc: "A consult plus one-page personalized recommendations.", best: false },
              { name: "Signature", price: "$75", unit: "/ day", desc: "Full custom day-by-day itinerary, planner & budget. You book.", best: true },
              { name: "Concierge", price: "$1,500", unit: "/ trip", desc: "Everything handled — we book it all and deliver final docs.", best: false },
            ].map((p) => (
              <div
                key={p.name}
                style={{
                  border: p.best ? "1px solid #C9A24B" : "1px solid #E7E1D4",
                  borderRadius: 6,
                  padding: 26,
                  textAlign: "center",
                }}
              >
                <h3 style={{ fontSize: "1.25rem", marginBottom: 4 }}>{p.name}</h3>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.7rem",
                    color: "#0E3B3A",
                    margin: "8px 0",
                  }}
                >
                  {p.price}{" "}
                  <small style={{ fontSize: "0.8rem", color: "#6B7488", fontFamily: "var(--font-sans)" }}>
                    {p.unit}
                  </small>
                </div>
                <p style={{ color: "#6B7488", fontWeight: 300, fontSize: "0.9rem" }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 30 }}>
            <Link
              href="#plan-form"
              style={{
                display: "inline-flex",
                padding: "16px 40px",
                background: "#C9A24B",
                color: "#16302E",
                borderRadius: 2,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontSize: "0.82rem",
              }}
            >
              Start planning your trip
            </Link>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: "#0A2D2C",
          color: "#C6B4AD",
          padding: "30px 0",
          fontSize: "0.84rem",
          fontWeight: 300,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 26px" }}>
          &copy; {new Date().getFullYear()} Voyelle &nbsp;&middot;&nbsp;{" "}
          <Link href="/" style={{ color: "#C6B4AD", borderBottom: "1px solid #C9A24B" }}>
            Home
          </Link>{" "}
          &nbsp;&middot;&nbsp;{" "}
          <Link href="/terms" style={{ color: "#C6B4AD", borderBottom: "1px solid #C9A24B" }}>
            Terms
          </Link>{" "}
          &nbsp;&middot;&nbsp;{" "}
          <Link href="/privacy" style={{ color: "#C6B4AD", borderBottom: "1px solid #C9A24B" }}>
            Privacy
          </Link>
        </div>
      </footer>
    </>
  );
}

function PlanForm() {
  return (
    <div
      id="plan-form"
      style={{
        background: "#F6F1E7",
        borderRadius: 8,
        padding: 34,
        boxShadow: "0 24px 60px rgba(14,59,58,0.16)",
        color: "#16302E",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: 4 }}>Start your trip request</h2>
      <p style={{ color: "#6B7488", fontWeight: 300, fontSize: "0.95rem", marginBottom: 20 }}>
        No commitment — just tell us what you&apos;re dreaming of.
      </p>
      <form action="https://formspree.io/f/xojzkedl" method="POST">
        <input type="hidden" name="_subject" value="New trip request (Plan page) — Voyelle" />
        <input type="hidden" name="source" value="plan-page" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 15 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#0E3B3A", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Name <span style={{ color: "#C9A24B" }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", padding: "12px 13px", border: "1px solid #E7E1D4", borderRadius: 3, background: "#F6F1E7", color: "#16302E" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#0E3B3A", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Email <span style={{ color: "#C9A24B" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", padding: "12px 13px", border: "1px solid #E7E1D4", borderRadius: 3, background: "#F6F1E7", color: "#16302E" }}
            />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 15 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#0E3B3A", textTransform: "uppercase", letterSpacing: "0.08em" }}>Destination / idea</label>
            <input type="text" name="destination" placeholder="e.g. Italy, or 'somewhere warm'" style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", padding: "12px 13px", border: "1px solid #E7E1D4", borderRadius: 3, background: "#F6F1E7", color: "#16302E" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#0E3B3A", textTransform: "uppercase", letterSpacing: "0.08em" }}>Travel dates</label>
            <input type="text" name="dates" placeholder="e.g. fall 2026, or flexible" style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", padding: "12px 13px", border: "1px solid #E7E1D4", borderRadius: 3, background: "#F6F1E7", color: "#16302E" }} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 15 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#0E3B3A", textTransform: "uppercase", letterSpacing: "0.08em" }}>Travelers</label>
            <input type="text" name="travelers" placeholder="e.g. 2 adults" style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", padding: "12px 13px", border: "1px solid #E7E1D4", borderRadius: 3, background: "#F6F1E7", color: "#16302E" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#0E3B3A", textTransform: "uppercase", letterSpacing: "0.08em" }}>Approx. budget</label>
            <input type="text" name="budget" placeholder="e.g. $6,000" style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", padding: "12px 13px", border: "1px solid #E7E1D4", borderRadius: 3, background: "#F6F1E7", color: "#16302E" }} />
          </div>
        </div>
        <div style={{ marginBottom: 15, display: "flex", flexDirection: "column", gap: 6 }}>
          <label style={{ fontSize: "0.72rem", fontWeight: 600, color: "#0E3B3A", textTransform: "uppercase", letterSpacing: "0.08em" }}>Anything else?</label>
          <textarea name="notes" placeholder="Occasion, must-dos, dietary needs, deal-breakers..." style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", padding: "12px 13px", border: "1px solid #E7E1D4", borderRadius: 3, background: "#F6F1E7", color: "#16302E", resize: "vertical", minHeight: 74 }} />
        </div>
        <button
          type="submit"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 30px",
            borderRadius: 2,
            fontWeight: 600,
            fontSize: "0.84rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            background: "#0E3B3A",
            color: "#F6F1E7",
            border: "none",
            width: "100%",
            minHeight: 50,
            cursor: "pointer",
          }}
        >
          Send my trip request
        </button>
        <p style={{ fontSize: "0.78rem", color: "#6B7488", textAlign: "center", marginTop: 12, fontWeight: 300 }}>
          We&apos;ll never share your details. Prefer email?{" "}
          <a href="mailto:aaron3534@outlook.com" style={{ color: "#0E3B3A", borderBottom: "1px solid #C9A24B" }}>
            aaron3534@outlook.com
          </a>
        </p>
      </form>
    </div>
  );
}
