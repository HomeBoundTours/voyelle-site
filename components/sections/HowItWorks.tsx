"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "Share", desc: "Tell us your dates, budget, style, and must-haves through a short form." },
  { num: "2", title: "Design", desc: "We research and craft a tailored itinerary concept around you." },
  { num: "3", title: "Refine", desc: "We adjust until the plan is exactly right — revisions included." },
  { num: "4", title: "Receive", desc: "Your finished itinerary & planner arrive, beautifully organized." },
  { num: "5", title: "Travel", desc: "Everything in hand — you simply go and enjoy." },
];

export default function HowItWorks() {
  return (
    <section id="how" style={{ padding: "108px 0" }}>
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
              textAlign: "center",
            }}
          >
            How it works
          </span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "14px 0 18px" }}>
            A simple path to a remarkable trip
          </h2>
          <p style={{ color: "#6B7488", fontSize: "1.08rem", fontWeight: 300 }}>
            You share your vision; we research, design, and deliver a plan that&apos;s ready the moment you are.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="voy-steps"
        >
          {steps.map((s) => (
            <div key={s.num} style={{ textAlign: "center", padding: "0 16px", position: "relative" }}>
              <div
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: "50%",
                  background: "#FBF8F1",
                  border: "1px solid #D8D1C2",
                  color: "#A9842F",
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 22px",
                  position: "relative",
                  zIndex: 2,
                  transition: "all 0.3s ease",
                }}
              >
                {s.num}
              </div>
              <h4 style={{ fontSize: "1.16rem", marginBottom: 8 }}>{s.title}</h4>
              <p style={{ fontSize: "0.92rem", color: "#6B7488", fontWeight: 300, lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
