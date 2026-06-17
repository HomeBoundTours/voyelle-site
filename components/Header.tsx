"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "How it works", href: "/#how" },
  { label: "Packages", href: "/#packages" },
  { label: "Who we serve", href: "/#who" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`voy-nav${scrolled ? " scrolled" : ""}`}
      aria-label="Site header"
    >
      <div className="voy-nav-inner">
        <Link
          href="/"
          aria-label="Voyelle home"
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

        <button
          className="block md:hidden bg-transparent border-none"
          style={{ color: "#F6F1E7", fontSize: "1.5rem", lineHeight: 1 }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={`${
            menuOpen
              ? "flex flex-col absolute top-full left-0 right-0 py-6 px-7 gap-5"
              : "hidden md:flex"
          } items-center gap-9`}
          id="navlinks"
          style={
            menuOpen
              ? {
                  background: "rgba(10,45,44,0.97)",
                  backdropFilter: "blur(18px)",
                  borderBottom: "1px solid rgba(220,192,129,0.14)",
                  boxShadow: "0 24px 60px rgba(14,59,58,0.16)",
                }
              : undefined
          }
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#F6F1E7",
                fontSize: "0.82rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                opacity: 0.88,
              }}
              className="hover:opacity-100 transition-opacity"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#start"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "#C9A24B",
              color: "#16302E",
              padding: "10px 20px",
              borderRadius: "10px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: "0.74rem",
            }}
          >
            Start planning
          </Link>
        </nav>
      </div>
    </header>
  );
}
