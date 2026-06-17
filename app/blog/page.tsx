import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Travel Planning Guides & Tips | Voyelle Blog",
  description:
    "Practical guides on planning trips, building itineraries, travel planner costs, and more from Voyelle.",
  alternates: { canonical: "https://voyelle.com/blog/" },
  openGraph: {
    type: "website",
    title: "Travel Planning Guides & Tips | Voyelle Blog",
    description:
      "Practical guides on planning trips, building itineraries, travel planner costs, and more from Voyelle.",
    url: "https://voyelle.com/blog/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Voyelle Blog",
  url: "https://voyelle.com/blog/",
  description: "Guides on travel planning, itineraries, and getting the most from your trip.",
  publisher: {
    "@type": "Organization",
    name: "Voyelle",
    logo: { "@type": "ImageObject", url: "https://voyelle.com/assets/logo_primary.png" },
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top bar */}
      <div style={{ background: "#0A2D2C", padding: "16px 0" }}>
        <div
          style={{
            maxWidth: 1080,
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
          <Link
            href="/#start"
            style={{ color: "#F6F1E7", fontSize: "0.8rem", letterSpacing: "0.06em", opacity: 0.9 }}
          >
            Start planning →
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 26px" }}>
        <div style={{ padding: "40px 0 6px" }}>
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.24em",
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "#C9A24B",
              marginTop: 22,
              display: "block",
            }}
          >
            The Voyelle Journal
          </span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              color: "#0E3B3A",
              fontSize: "clamp(2rem,4vw,2.7rem)",
              fontWeight: 600,
              lineHeight: 1.12,
              margin: "10px 0 6px",
              letterSpacing: "-0.01em",
            }}
          >
            Travel planning guides & tips
          </h1>
          <p style={{ color: "#6B7488", fontWeight: 300 }}>
            Practical, no-fluff guides to help you plan a better trip — or decide to hand it off.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
            margin: "36px 0 10px",
          }}
        >
          {posts.map((post) => (
            <div
              key={post.slug}
              style={{
                border: "1px solid #E7E1D4",
                borderRadius: 6,
                padding: 28,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "#0E3B3A",
                  fontSize: "1.3rem",
                  lineHeight: 1.2,
                  marginBottom: 8,
                }}
              >
                {post.title}
              </h2>
              <p style={{ fontWeight: 300, color: "#6B7488", fontSize: "0.94rem", marginBottom: 14 }}>
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  color: "#0E3B3A",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  borderBottom: "1px solid #C9A24B",
                }}
              >
                Read the guide →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            background: "#F6F1E7",
            border: "1px solid #E7E1D4",
            borderLeft: "3px solid #C9A24B",
            borderRadius: "0 6px 6px 0",
            padding: "26px 28px",
            margin: "34px 0",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              color: "#0E3B3A",
              fontSize: "1.3rem",
              marginBottom: 8,
            }}
          >
            Skip the planning — we&apos;ll do it for you.
          </h3>
          <p style={{ fontWeight: 300, marginBottom: 16 }}>
            Tell us your dates, budget, and style, and we&apos;ll design a custom, day-by-day itinerary built around you. Plans from $150. We reply within one business day.
          </p>
          <Link
            href="/#start"
            style={{
              display: "inline-block",
              background: "#C9A24B",
              color: "#16302E",
              padding: "13px 26px",
              borderRadius: 2,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: "0.78rem",
            }}
          >
            Start planning your trip
          </Link>
        </div>

        <div
          style={{
            borderTop: "1px solid #E7E1D4",
            marginTop: 40,
            padding: "26px 0 60px",
            color: "#6B7488",
            fontSize: "0.84rem",
            fontWeight: 300,
          }}
        >
          &copy; {new Date().getFullYear()} Voyelle. All rights reserved. &nbsp;·&nbsp;{" "}
          <Link href="/" style={{ color: "#6B7488" }}>Home</Link> &nbsp;·&nbsp;{" "}
          <Link href="/blog" style={{ color: "#6B7488" }}>Blog</Link> &nbsp;·&nbsp;{" "}
          <Link href="/terms" style={{ color: "#6B7488" }}>Terms</Link> &nbsp;·&nbsp;{" "}
          <Link href="/privacy" style={{ color: "#6B7488" }}>Privacy</Link>
        </div>
      </div>
    </>
  );
}
