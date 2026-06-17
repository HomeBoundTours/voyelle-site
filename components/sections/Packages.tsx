"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Trip Spark",
    for: "A focused starting point for confident, do-it-yourself travelers.",
    price: "$150",
    unit: "flat",
    features: [
      "Personalized recommendations",
      "One-page curated highlights",
      "Insider tips for your dates",
      "1 revision",
    ],
    featured: false,
    btnStyle: "ghost",
  },
  {
    name: "Signature Itinerary",
    for: "A full custom plan, beautifully organized and ready to book.",
    price: "$75",
    unit: "/ day",
    features: [
      "Everything in Trip Spark",
      "Full day-by-day itinerary (Word)",
      "Trip planner & budget (Excel)",
      "Dining & activity guidance",
      "2 revisions",
    ],
    featured: true,
    ribbon: "Most popular",
    btnStyle: "gold",
  },
  {
    name: "Voyelle Concierge",
    for: "Everything handled — your trip secured and documents delivered.",
    price: "$1,500",
    unit: "/ trip",
    features: [
      "Everything in Signature",
      "Reservation & booking management",
      "Dining & activity bookings",
      "Priority support",
      "Unlimited revisions",
    ],
    featured: false,
    btnStyle: "ghost",
  },
];

export default function Packages() {
  return (
    <section id="packages" style={{ padding: "108px 0", background: "#FBF8F1" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", maxWidth: "62ch", margin: "0 auto 64px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#C9A24B",
              display: "block",
            }}
          >
            Packages
          </span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "14px 0 18px" }}>
            Choose your level of support
          </h2>
          <p style={{ color: "#6B7488", fontSize: "1.08rem", fontWeight: 300 }}>
            Three thoughtfully designed packages for every kind of traveler. We handle the rest.
          </p>
        </motion.div>

        <div className="voy-cards">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{
                position: "relative",
                border: pkg.featured ? "1px solid #C9A24B" : "1px solid #E7E1D4",
                borderRadius: 14,
                padding: "42px 34px",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                boxShadow: pkg.featured
                  ? "0 2px 14px rgba(14,59,58,0.06)"
                  : "0 1px 3px rgba(14,59,58,0.05), 0 4px 16px rgba(14,59,58,0.06)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
              }}
            >
              {pkg.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: -13,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#C9A24B",
                    color: "#16302E",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.66rem",
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    padding: "6px 18px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}
                >
                  {pkg.ribbon}
                </span>
              )}
              {/* Top accent bar */}
              {pkg.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: "#C9A24B",
                    borderRadius: "14px 14px 0 0",
                  }}
                />
              )}

              <h3 style={{ fontSize: "1.6rem", marginBottom: 8 }}>{pkg.name}</h3>
              <p style={{ color: "#6B7488", fontSize: "0.94rem", fontWeight: 300, minHeight: 48, lineHeight: 1.55 }}>
                {pkg.for}
              </p>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.6rem",
                  color: "#0E3B3A",
                  margin: "20px 0 2px",
                  lineHeight: 1,
                }}
              >
                {pkg.price}{" "}
                <small style={{ fontSize: "0.92rem", color: "#6B7488", fontFamily: "var(--font-sans)", fontWeight: 400 }}>
                  {pkg.unit}
                </small>
              </div>
              <ul style={{ listStyle: "none", margin: "26px 0 32px", flex: 1 }}>
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      padding: "11px 0 11px 30px",
                      position: "relative",
                      fontSize: "0.95rem",
                      borderBottom: "1px solid #E7E1D4",
                      fontWeight: 400,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 18,
                        width: 14,
                        height: 7,
                        borderLeft: "1.5px solid #C9A24B",
                        borderBottom: "1.5px solid #C9A24B",
                        transform: "rotate(-45deg)",
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/#start"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "13px 28px",
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: "0.84rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  minHeight: 48,
                  transition: "all 0.3s ease",
                  ...(pkg.btnStyle === "gold"
                    ? { background: "#C9A24B", color: "#16302E", border: "1px solid transparent" }
                    : { background: "transparent", border: "1px solid rgba(14,59,58,0.35)", color: "#0E3B3A" }),
                }}
              >
                Get started
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginTop: 48,
            textAlign: "center",
            color: "#6B7488",
            fontSize: "0.94rem",
            fontWeight: 300,
            maxWidth: "78ch",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.8,
          }}
        >
          <strong style={{ color: "#0E3B3A", fontWeight: 600 }}>Add-ons:</strong>{" "}
          Extra destination ($50/day) · Rush planning, inside 14 days (+25%) · Group / multi-room ($200) · Restaurant & event desk ($75).{" "}
          <em>Prices are starting points; your exact quote is confirmed when we receive your request.</em>
        </motion.p>
      </div>
    </section>
  );
}
