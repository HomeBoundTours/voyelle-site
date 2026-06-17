"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    title: "Couples & honeymooners",
    desc: "Romance, ease, and standout moments designed around the two of you.",
  },
  {
    title: "Families",
    desc: "Smooth logistics, kid-friendly pacing, and downtime built right in.",
  },
  {
    title: "Adventure & outdoor",
    desc: "Bucket-list activities with reputable operators; permits flagged early.",
  },
  {
    title: "Busy professionals",
    desc: "Maximum trip, minimum effort — we handle every detail.",
  },
];

export default function WhoWeServe() {
  return (
    <section id="who" style={{ padding: "108px 0" }}>
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
            Who we serve
          </span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "14px 0 18px" }}>
            The same premium experience, for every kind of trip
          </h2>
        </motion.div>

        <div className="voy-aud-grid">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "36px 30px",
                border: "1px solid #E7E1D4",
                boxShadow: "0 1px 3px rgba(14,59,58,0.05), 0 4px 12px rgba(14,59,58,0.06)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
              }}
            >
              <div
                style={{ width: 40, height: 1, background: "#C9A24B", marginBottom: 20 }}
              />
              <h4 style={{ fontSize: "1.22rem", marginBottom: 10 }}>{a.title}</h4>
              <p style={{ fontSize: "0.92rem", color: "#6B7488", fontWeight: 300, lineHeight: 1.65 }}>
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
