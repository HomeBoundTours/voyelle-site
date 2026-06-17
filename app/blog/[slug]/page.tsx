import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: post.canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: post.canonical,
      publishedTime: post.date,
      images: ["https://voyelle.com/assets/logo_primary.png"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Voyelle", url: "https://voyelle.com" },
    publisher: {
      "@type": "Organization",
      name: "Voyelle",
      logo: { "@type": "ImageObject", url: "https://voyelle.com/assets/logo_primary.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": post.canonical },
    image: "https://voyelle.com/assets/logo_primary.png",
    inLanguage: "en-US",
  };

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

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 26px" }}>
        {/* Breadcrumb */}
        <p style={{ color: "#6B7488", fontSize: "0.82rem", margin: "26px 0 0" }}>
          <Link href="/" style={{ color: "#6B7488", borderBottom: "1px solid #E7E1D4" }}>Home</Link>
          {" › "}
          <Link href="/blog" style={{ color: "#6B7488", borderBottom: "1px solid #E7E1D4" }}>Blog</Link>
          {" › "}
          {post.title}
        </p>

        <article style={{ padding: "8px 0 30px" }}>
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
            {post.category}
          </span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              color: "#0E3B3A",
              fontSize: "clamp(2rem,4vw,2.7rem)",
              fontWeight: 600,
              lineHeight: 1.12,
              margin: "10px 0 10px",
              letterSpacing: "-0.01em",
            }}
          >
            {post.title}
          </h1>
          <p style={{ color: "#6B7488", fontSize: "0.86rem", fontWeight: 300, marginBottom: 8 }}>
            Voyelle · Updated June 2026
          </p>
          <div style={{ height: 1, background: "#C9A24B", opacity: 0.55, margin: "22px 0 28px" }} />

          <div
            className="blog-body"
            dangerouslySetInnerHTML={{ __html: post.body }}
            style={{
              /* Scoped article styles */
            }}
          />

          {/* In-article CTA */}
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
        </article>

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

      <style>{`
        .blog-body p { margin: 12px 0; font-weight: 300; font-size: 1.04rem; }
        .blog-lead { font-size: 1.15rem; color: #16302E; font-weight: 300; }
        .blog-body h2 { font-family: var(--font-serif); color: #0E3B3A; font-size: 1.55rem; font-weight: 600; margin: 34px 0 10px; }
        .blog-body h3 { font-size: 1.1rem; font-weight: 600; color: #0E3B3A; margin: 24px 0 6px; }
        .blog-body ul, .blog-body ol { margin: 14px 0 14px 6px; padding-left: 22px; }
        .blog-body li { margin: 8px 0; font-weight: 300; }
        .blog-body a { border-bottom: 1px solid #C9A24B; font-weight: 500; color: #0E3B3A; }
        .blog-body table { width: 100%; border-collapse: collapse; margin: 18px 0; font-size: 0.95rem; }
        .blog-body th, .blog-body td { border: 1px solid #E7E1D4; padding: 10px 12px; text-align: left; font-weight: 300; }
        .blog-body th { background: #0E3B3A; color: #fff; font-weight: 600; }
        .blog-body tr:nth-child(even) td { background: #F6F1E7; }
      `}</style>
    </>
  );
}
