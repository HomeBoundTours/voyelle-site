"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FORMSPREE = "https://formspree.io/f/xojzkedl";

const interests = [
  "Food & wine",
  "History, art & culture",
  "Outdoor & nature",
  "Beaches & relaxation",
  "Nightlife & entertainment",
  "Shopping & markets",
  "Off-the-beaten-path",
  "Wellness & spa",
];

export default function IntakeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const d = await res.json().catch(() => ({}));
        setErrorMsg(
          (d?.errors?.[0]?.message) ||
            "Something went wrong. Please email us and we will take it from there."
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("We could not send that just now. Please check your connection or email us directly.");
      setStatus("error");
    }
  }

  const field: React.CSSProperties = {
    marginBottom: 22,
    display: "flex",
    flexDirection: "column",
  };
  const label: React.CSSProperties = {
    fontSize: "0.74rem",
    fontWeight: 600,
    color: "#0E3B3A",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  };
  const input: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "0.98rem",
    padding: "13px 15px",
    border: "1px solid #E7E1D4",
    borderRadius: 8,
    background: "#F6F1E7",
    color: "#16302E",
    width: "100%",
  };

  return (
    <section
      id="start"
      style={{
        position: "relative",
        background: "#0E3B3A",
        color: "#F6F1E7",
        overflow: "hidden",
        padding: "108px 0",
      }}
    >
      {/* Decorative circles */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 380,
          height: 380,
          border: "1px solid rgba(220,192,129,0.18)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -160,
          left: -100,
          width: 320,
          height: 320,
          border: "1px solid rgba(220,192,129,0.12)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", maxWidth: "62ch", margin: "0 auto 48px" }}>
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
            Start planning
          </span>
          <h2 style={{ color: "#F6F1E7", fontSize: "clamp(2rem,4vw,3rem)", margin: "14px 0 18px" }}>
            Tell us about your trip
          </h2>
          <p style={{ color: "rgba(247,244,236,0.82)", fontSize: "1.08rem", fontWeight: 300 }}>
            Share what you can — there are no wrong answers. The more you tell us, the more personal your trip becomes. We&apos;ll be in touch with your next steps within one business day.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                maxWidth: 640,
                margin: "0 auto",
                background: "#fff",
                borderRadius: 16,
                padding: "56px 44px",
                textAlign: "center",
                boxShadow: "0 24px 60px rgba(14,59,58,0.16)",
              }}
            >
              <div
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: "50%",
                  background: "#C9A24B",
                  color: "#0E3B3A",
                  fontSize: "1.9rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                }}
                aria-hidden="true"
              >
                ✓
              </div>
              <h3 style={{ fontSize: "1.8rem", color: "#0E3B3A", marginBottom: 14 }}>
                Thank you — your request is in.
              </h3>
              <p style={{ color: "#16302E", fontWeight: 300, marginBottom: 10, lineHeight: 1.7 }}>
                We&apos;ve received your trip details and will be in touch with your next steps within one business day. Keep an eye on your inbox (and your spam folder, just in case).
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  color: "#6B7488",
                }}
              >
                In the meantime, start dreaming — the best trips begin with a little anticipation.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              ref={formRef}
              onSubmit={handleSubmit}
              action={FORMSPREE}
              method="POST"
              style={{
                maxWidth: 780,
                margin: "0 auto",
                background: "#fff",
                borderRadius: 16,
                padding: "48px",
                color: "#16302E",
                boxShadow: "0 24px 60px rgba(14,59,58,0.16)",
              }}
            >
              <input type="hidden" name="_subject" value="New trip request — Voyelle" />

              <div className="voy-form-row">
                <div style={field}>
                  <label style={label}>Full name(s) <span style={{ color: "#C9A24B" }}>*</span></label>
                  <input style={input} type="text" name="name" required />
                </div>
                <div style={field}>
                  <label style={label}>Email <span style={{ color: "#C9A24B" }}>*</span></label>
                  <input style={input} type="email" name="email" required />
                </div>
              </div>

              <div className="voy-form-row">
                <div style={field}>
                  <label style={label}>Phone</label>
                  <input style={input} type="tel" name="phone" />
                </div>
                <div style={field}>
                  <label style={label}>Best way to reach you</label>
                  <select style={input} name="contact_pref">
                    <option>Email</option>
                    <option>Phone call</option>
                    <option>Text message</option>
                  </select>
                </div>
              </div>

              <div className="voy-form-row">
                <div style={field}>
                  <label style={label}>Destination(s) or ideas</label>
                  <input style={input} type="text" name="destination" placeholder="e.g. Portugal, or 'somewhere warm in fall'" />
                </div>
                <div style={field}>
                  <label style={label}>Departure city / airport</label>
                  <input style={input} type="text" name="departure" />
                </div>
              </div>

              <div className="voy-form-row">
                <div style={field}>
                  <label style={label}>Travel dates (or flexibility)</label>
                  <input style={input} type="text" name="dates" placeholder="e.g. Sep 12–17, 2026, or flexible" />
                </div>
                <div style={field}>
                  <label style={label}>Trip length (nights)</label>
                  <input style={input} type="text" name="nights" />
                </div>
              </div>

              <div className="voy-form-row">
                <div style={field}>
                  <label style={label}>Number of travelers</label>
                  <input style={input} type="text" name="travelers" placeholder="e.g. 2 adults" />
                </div>
                <div style={field}>
                  <label style={label}>Approx. total budget</label>
                  <input style={input} type="text" name="budget" placeholder="e.g. $6,000, flights included" />
                </div>
              </div>

              <div className="voy-form-row">
                <div style={field}>
                  <label style={label}>Comfort level</label>
                  <select style={input} name="comfort">
                    <option>No preference</option>
                    <option>3 star</option>
                    <option>4 star</option>
                    <option>5 star</option>
                    <option>Mixed</option>
                  </select>
                </div>
                <div style={field}>
                  <label style={label}>Preferred pace</label>
                  <select style={input} name="pace">
                    <option>No preference</option>
                    <option>Packed</option>
                    <option>Balanced</option>
                    <option>Relaxed</option>
                  </select>
                </div>
              </div>

              <div style={{ ...field, gridColumn: "1/-1", marginBottom: 22 }}>
                <label style={label}>What sounds like your ideal trip?</label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 10,
                  }}
                >
                  {interests.map((interest) => (
                    <label
                      key={interest}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontSize: "0.92rem",
                        fontWeight: 400,
                        color: "#16302E",
                        textTransform: "none",
                        letterSpacing: 0,
                        cursor: "pointer",
                        padding: "4px 0",
                      }}
                    >
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        style={{ width: "auto", accentColor: "#C9A24B" }}
                      />
                      {interest}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ ...field, marginBottom: 22 }}>
                <label style={label}>Occasion, must-dos, dietary or accessibility needs, deal-breakers</label>
                <textarea
                  style={{ ...input, resize: "vertical", minHeight: 104 }}
                  name="notes"
                  placeholder="Anniversary? Pescatarian? No early mornings? Tell us anything that helps."
                />
              </div>

              <div style={{ ...field, marginBottom: 22 }}>
                <label style={label}>Which package interests you?</label>
                <select style={input} name="package">
                  <option>Not sure yet — help me choose</option>
                  <option>Trip Spark ($150 flat)</option>
                  <option>Signature Itinerary ($75/day)</option>
                  <option>Voyelle Concierge ($1,500/trip)</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "13px 28px",
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: "0.84rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  background: "#0E3B3A",
                  color: "#F6F1E7",
                  border: "1px solid transparent",
                  minHeight: 48,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  opacity: status === "loading" ? 0.65 : 1,
                  marginTop: 10,
                }}
                aria-busy={status === "loading"}
              >
                {status === "loading" ? "Sending…" : "Send my trip request"}
              </button>

              {status === "error" && (
                <p
                  role="alert"
                  style={{ color: "#9a2a2a", fontSize: "0.88rem", textAlign: "center", marginTop: 14 }}
                >
                  {errorMsg}{" "}
                  <a
                    href="mailto:aaron3534@outlook.com"
                    style={{ color: "#DCC081", fontWeight: 600, borderBottom: "1px solid rgba(220,192,129,0.40)" }}
                  >
                    aaron3534@outlook.com
                  </a>
                </p>
              )}

              <p style={{ fontSize: "0.86rem", color: "#6B7488", marginTop: 18, textAlign: "center", fontWeight: 300 }}>
                Prefer to write us directly? Email{" "}
                <a
                  href="mailto:aaron3534@outlook.com"
                  style={{ color: "#DCC081", fontWeight: 600, borderBottom: "1px solid rgba(220,192,129,0.40)" }}
                >
                  aaron3534@outlook.com
                </a>{" "}
                and we&apos;ll take it from there.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
