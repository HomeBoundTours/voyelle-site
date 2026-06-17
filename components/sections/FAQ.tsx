"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What is a travel advisor, and what does Voyelle actually do?",
    a: "We're a full-service travel planning studio. You tell us your dates, budget, and the kind of trip you want, and we research destinations, design a realistic day-by-day itinerary, and organize every detail — lodging, activities, dining, and logistics — into clear documents you can travel with. You can book it yourself or have us handle the reservations.",
  },
  {
    q: "How much does a custom travel itinerary cost?",
    a: "Three packages: Trip Spark is $150 flat for a one-page set of personalized recommendations; the Signature Itinerary is $75 per day for a full custom, day-by-day plan plus a trip planner and budget; and Voyelle Concierge is $1,500 per trip with everything handled, including bookings. Package fees cover planning, not the cost of flights, hotels, or activities. Your exact quote is confirmed when we receive your request.",
  },
  {
    q: "How is this different from a booking site or a regular travel agent?",
    a: "Booking sites hand you a search box and leave the planning to you. We do the opposite: we research and design the whole trip around you, pace it realistically, flag what sells out, and deliver an organized itinerary and budget. You skip dozens of hours of tabs, reviews, and second-guessing.",
  },
  {
    q: "Do you book the trip for me, or just plan it?",
    a: "Your choice. With Trip Spark and the Signature Itinerary, we design the plan and you book it (with our guidance). With Voyelle Concierge, we manage the reservations and bookings for you and deliver the final documents ready to travel.",
  },
  {
    q: "How long does it take to get my itinerary?",
    a: "Most plans are ready within about 7–10 days of receiving your details, depending on the trip's length and complexity. Traveling sooner? Our rush option covers departures inside 14 days.",
  },
  {
    q: "Where can you plan trips to?",
    a: 'Anywhere. We plan worldwide — from a long weekend in a single city to multi-country trips. Tell us the destination, or just a vibe like "somewhere warm in the fall," and we\'ll shape it.',
  },
  {
    q: "What kinds of trips do you specialize in?",
    a: "Couples and honeymoons, family vacations, adventure and outdoor trips, and busy professionals who want a great trip without the planning. The same premium, organized experience flexes to each.",
  },
  {
    q: "How do we get started?",
    a: "Fill out the trip request form on this page with whatever you know so far. We'll follow up with your next steps within one business day. There's no commitment to send us your details.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://voyelle.com/#faq",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #E7E1D4" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "24px 44px 24px 0",
          background: "none",
          border: "none",
          textAlign: "left",
          fontFamily: "var(--font-serif)",
          fontSize: "1.16rem",
          color: "#0E3B3A",
          fontWeight: 500,
          cursor: "pointer",
          transition: "color 0.2s ease",
          gap: 16,
        }}
      >
        {q}
        <span
          style={{
            color: "#C9A24B",
            fontSize: "1.6rem",
            fontWeight: 300,
            lineHeight: 1,
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                padding: "0 44px 26px 0",
                color: "#6B7488",
                fontWeight: 300,
                lineHeight: 1.78,
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ padding: "108px 0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            Questions
          </span>
          <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", margin: "14px 0 18px" }}>
            Frequently asked questions
          </h2>
          <p style={{ color: "#6B7488", fontSize: "1.08rem", fontWeight: 300 }}>
            Everything you need to know before you start planning your trip.
          </p>
        </motion.div>

        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
