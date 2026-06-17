import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0A2D2C",
        color: "rgba(168,178,200,0.80)",
        padding: "72px 0 32px",
        fontSize: "0.92rem",
        fontWeight: 300,
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        <div className="voy-foot-grid">
          <div>
            <span
              style={{
                display: "inline-block",
                marginBottom: 14,
                fontFamily: "var(--font-serif)",
                fontWeight: 600,
                fontSize: "1.6rem",
                color: "#F6F1E7",
                letterSpacing: "0.02em",
              }}
            >
              Voyelle
            </span>
            <p style={{ maxWidth: "38ch", lineHeight: 1.8 }}>
              The world, thoughtfully arranged. Expertly researched, beautifully organized trips — delivered ready to travel.
            </p>
          </div>
          <div>
            <h5
              style={{
                color: "#DCC081",
                fontFamily: "var(--font-sans)",
                fontSize: "0.74rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 18,
                fontWeight: 700,
              }}
            >
              Explore
            </h5>
            {[
              { label: "How it works", href: "/#how" },
              { label: "Packages", href: "/#packages" },
              { label: "Who we serve", href: "/#who" },
              { label: "About", href: "/#about" },
              { label: "FAQ", href: "/#faq" },
              { label: "Blog", href: "/blog" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  display: "block",
                  marginBottom: 11,
                  color: "rgba(168,178,200,0.75)",
                  transition: "color 0.25s ease, transform 0.25s ease",
                }}
                className="hover:text-[#DCC081]"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <h5
              style={{
                color: "#DCC081",
                fontFamily: "var(--font-sans)",
                fontSize: "0.74rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                marginBottom: 18,
                fontWeight: 700,
              }}
            >
              Get in touch
            </h5>
            <Link
              href="/#start"
              style={{ display: "block", marginBottom: 11, color: "rgba(168,178,200,0.75)" }}
            >
              Start planning
            </Link>
            <a
              href="mailto:aaron3534@outlook.com"
              style={{ display: "block", marginBottom: 11, color: "rgba(168,178,200,0.75)" }}
            >
              aaron3534@outlook.com
            </a>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(220,192,129,0.14)",
            paddingTop: 26,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: "0.82rem",
            letterSpacing: "0.02em",
            color: "rgba(107,116,136,0.75)",
          }}
        >
          <span>&copy; {new Date().getFullYear()} Voyelle. All rights reserved.</span>
          <span>
            <Link href="/terms" style={{ display: "inline", color: "inherit" }}>
              Terms
            </Link>
            {" · "}
            <Link href="/privacy" style={{ display: "inline", color: "inherit" }}>
              Privacy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
