"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#F6F1E7",
        padding: "140px 28px 110px",
        overflow: "hidden",
      }}
    >
      <div className="voy-hero-bg" aria-hidden="true" />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 860 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(1.1rem,2vw,1.45rem)",
            color: "#DCC081",
            marginBottom: 8,
            fontWeight: 500,
          }}
        >
          The world, thoughtfully arranged.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          style={{
            color: "#F6F1E7",
            fontSize: "clamp(2.6rem,6.4vw,5rem)",
            fontWeight: 600,
            lineHeight: 1.05,
            margin: "6px auto 26px",
            maxWidth: "16ch",
          }}
        >
          Remarkable trips, without the work of planning one.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          style={{
            maxWidth: "54ch",
            margin: "0 auto 40px",
            fontSize: "clamp(1rem,1.4vw,1.18rem)",
            fontWeight: 300,
            color: "rgba(247,244,236,0.92)",
            lineHeight: 1.75,
          }}
        >
          We design seamless, personalized itineraries so you arrive relaxed, spend your time on what matters, and come home with a story worth telling. You travel — we handle the rest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.46 }}
          style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" }}
        >
          <Link
            href="/#start"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 9,
              padding: "13px 28px",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: "0.84rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: "#C9A24B",
              color: "#16302E",
              minHeight: 48,
              border: "1px solid transparent",
              transition: "all 0.3s ease",
            }}
          >
            Start planning your trip
          </Link>
          <Link
            href="/#how"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 9,
              padding: "13px 28px",
              borderRadius: 12,
              fontWeight: 600,
              fontSize: "0.84rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: "transparent",
              color: "#F6F1E7",
              minHeight: 48,
              border: "1px solid rgba(220,192,129,0.40)",
              transition: "all 0.3s ease",
            }}
          >
            See how it works
          </Link>
        </motion.div>
      </div>

      <div
        className="voy-scroll-cue"
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          color: "rgba(247,244,236,0.6)",
          fontSize: "0.66rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        Explore
      </div>
    </section>
  );
}
