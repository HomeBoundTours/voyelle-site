"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "108px 0", background: "#FBF8F1" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        <div className="voy-about-grid">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1100&q=85"
              alt="A thoughtfully planned European street at golden hour"
              width={1100}
              height={733}
              style={{ width: "100%", borderRadius: 14, boxShadow: "0 24px 60px rgba(14,59,58,0.16)" }}
              loading="lazy"
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "18px -18px -18px 18px",
                border: "1px solid rgba(201,162,75,0.45)",
                borderRadius: 14,
                zIndex: -1,
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "#C9A24B",
                display: "inline-block",
              }}
            >
              Our craft
            </span>
            <h2 style={{ fontSize: "clamp(2rem,3.6vw,2.8rem)", margin: "14px 0 22px" }}>
              A well-traveled friend who happens to be an expert
            </h2>
            <p style={{ color: "#16302E", marginBottom: 18, fontWeight: 300, fontSize: "1.04rem", lineHeight: 1.8 }}>
              Voyelle is a full-service travel planning studio. We do the research, the logistics, and the arranging so your trip feels effortless from the first idea to the flight home.
            </p>
            <p style={{ color: "#16302E", marginBottom: 18, fontWeight: 300, fontSize: "1.04rem", lineHeight: 1.8 }}>
              Confident and knowledgeable, warm and personal, calm and organized — we sweat the details so you don&apos;t have to.
            </p>
            <p
              style={{
                color: "#0E3B3A",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "1.18rem",
                borderLeft: "2px solid #DCC081",
                paddingLeft: 22,
                marginTop: 28,
                lineHeight: 1.6,
              }}
            >
              You plan the memories; we arrange the world around them.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
