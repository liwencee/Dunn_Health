import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Dunn Behavioral Health – Mental Health Resources",
  description: "Read articles, tips, and resources on mental health, therapy, relationships, and well-being from the Dunn Behavioral Health team.",
};

const posts = [
  {
    slug: "understanding-anxiety",
    title: "Understanding Anxiety: Causes, Symptoms & Treatment Options",
    excerpt: "Anxiety disorders affect millions of people. Learn what distinguishes normal worry from clinical anxiety — and what you can do about it.",
    image: "https://images.unsplash.com/photo-1620934125844-611fa7aaca69?w=800&q=80",
    category: "Anxiety",
    date: "April 20, 2025",
    readTime: "5 min read",
  },
  {
    slug: "couples-therapy-myths",
    title: "5 Myths About Couples Therapy Debunked",
    excerpt: "Couples counseling isn't just for relationships in crisis. Discover the truth about what therapy can do for your partnership.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    category: "Relationships",
    date: "April 5, 2025",
    readTime: "4 min read",
  },
  {
    slug: "trauma-healing-steps",
    title: "Healing From Trauma: A Step-by-Step Guide",
    excerpt: "Trauma recovery is not linear — but it is possible. Our therapists share the stages of healing and how to navigate them with support.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    category: "Trauma",
    date: "March 18, 2025",
    readTime: "7 min read",
  },
  {
    slug: "teen-mental-health-signs",
    title: "Signs Your Teen May Need Mental Health Support",
    excerpt: "Adolescence is a challenging time. Here's how to recognize warning signs and start a conversation with your teenager about getting help.",
    image: "https://images.unsplash.com/photo-1592947945242-69312358628b?w=800&q=80",
    category: "Teen Support",
    date: "March 3, 2025",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "10rem", paddingBottom: "5rem", background: "linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%)", textAlign: "center" }}>
        <div className="container">
          <span className="section-label" style={{ backgroundColor: "rgba(201,162,39,0.2)", color: "var(--accent-light)" }}>Resources</span>
          <h1 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginTop: "0.5rem", marginBottom: "1rem" }}>
            Mental Health Blog
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", maxWidth: 580, margin: "0 auto" }}>
            Expert insights, practical tips, and resources to support your mental health journey.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section style={{ padding: "6rem 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "2rem" }}>
            {posts.map((post) => (
              <article key={post.slug} className="blog-card">
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{ position: "relative", height: 220 }}>
                    <Image src={post.image} alt={post.title} fill sizes="400px" style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", top: "1rem", left: "1rem", backgroundColor: "var(--accent)", color: "#fff", padding: "0.3rem 0.8rem", borderRadius: 50, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em" }}>
                      {post.category}
                    </div>
                  </div>
                  <div style={{ padding: "1.75rem" }}>
                    <div style={{ display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "0.82rem", marginBottom: "0.85rem" }}>
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.4rem", color: "var(--primary)", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                      {post.title}
                    </h2>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.7, fontSize: "0.92rem", marginBottom: "1.25rem" }}>{post.excerpt}</p>
                    <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.87rem" }}>Read More →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
