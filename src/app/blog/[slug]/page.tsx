import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
}> = {
  "understanding-anxiety": {
    title: "Understanding Anxiety: Causes, Symptoms & Treatment Options",
    category: "Anxiety",
    date: "April 20, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1620934125844-611fa7aaca69?w=1200&q=85",
    excerpt: "Anxiety disorders affect millions of people. Learn what distinguishes normal worry from clinical anxiety — and what you can do about it.",
    content: `
## What Is Anxiety?

Anxiety is your body's natural response to stress. It's a feeling of fear or apprehension about what's to come — and in small doses, it's completely normal. Before a job interview, a first date, or a big presentation, feeling nervous is expected. However, when anxiety becomes overwhelming, persistent, and begins interfering with your daily life, it may be a clinical anxiety disorder.

Anxiety disorders are the most common mental health conditions in the United States, affecting more than 40 million adults every year. Despite being highly treatable, fewer than 40% of those affected receive treatment.

## Common Types of Anxiety Disorders

- **Generalized Anxiety Disorder (GAD)** — Persistent, excessive worry about a range of everyday things like work, health, family, and money.
- **Social Anxiety Disorder** — Intense fear of social situations and being judged, embarrassed, or humiliated by others.
- **Panic Disorder** — Recurrent unexpected panic attacks and fear of future attacks.
- **Specific Phobias** — Intense, irrational fear of specific objects or situations.
- **Separation Anxiety** — Excessive fear about being separated from attachment figures.

## Recognizing the Symptoms

Anxiety manifests both mentally and physically. Common symptoms include:

**Emotional/Cognitive symptoms:**
- Constant worry or dread
- Feeling on edge or restless
- Difficulty concentrating
- Irritability or mood swings
- Fear of losing control

**Physical symptoms:**
- Racing heart or palpitations
- Shortness of breath
- Sweating or trembling
- Headaches or muscle tension
- Fatigue and sleep problems
- Gastrointestinal issues

## What Causes Anxiety?

Anxiety doesn't have a single cause. It typically results from a combination of factors:

- **Genetics** — Anxiety tends to run in families
- **Brain chemistry** — Imbalances in neurotransmitters like serotonin and dopamine
- **Life experiences** — Trauma, abuse, or prolonged stress
- **Medical conditions** — Thyroid disorders, heart conditions, or chronic pain
- **Personality traits** — People who are perfectionists or have low self-esteem may be more prone

## Effective Treatment Options

The good news: anxiety is highly treatable. Most people see significant improvement with one or a combination of these approaches:

### 1. Cognitive Behavioral Therapy (CBT)
CBT is the gold standard for anxiety treatment. It helps you identify and challenge negative thought patterns and develop healthier coping strategies. Research consistently shows it's as effective as medication for many anxiety disorders — and the benefits last longer.

### 2. Medication
Your doctor may recommend antidepressants (SSRIs or SNRIs), buspirone, or short-term use of benzodiazepines. Medication works best when combined with therapy.

### 3. Lifestyle Changes
- Regular exercise (even 30 minutes of walking reduces anxiety significantly)
- Reducing caffeine and alcohol intake
- Prioritizing quality sleep
- Practicing mindfulness and deep breathing

### 4. Support Groups
Connecting with others who understand what you're going through can provide enormous relief. Both in-person and online groups are available.

## When to Seek Professional Help

If anxiety is affecting your relationships, work performance, or quality of life — it's time to talk to a professional. You don't have to "tough it out." Early intervention leads to better outcomes.

At Dunn Behavioral Health, our compassionate therapists specialize in anxiety treatment using evidence-based methods tailored to your unique situation. You deserve to live without the weight of constant worry.
    `,
  },

  "couples-therapy-myths": {
    title: "5 Myths About Couples Therapy Debunked",
    category: "Relationships",
    date: "April 5, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=85",
    excerpt: "Couples counseling isn't just for relationships in crisis. Discover the truth about what therapy can do for your partnership.",
    content: `
## The Truth About Couples Therapy

Couples therapy has a reputation problem. Despite being one of the most effective tools for building stronger relationships, many couples avoid it because of persistent myths and misconceptions. Let's set the record straight.

## Myth #1: "Therapy Is Only for Couples on the Verge of Divorce"

**The Truth:** Couples therapy is for any relationship at any stage. Many couples seek counseling proactively — to strengthen communication, navigate life transitions, or deepen intimacy before small issues become big ones.

In fact, research shows that couples who seek therapy early, before problems become entrenched, experience the best outcomes. Think of it like routine maintenance on a car rather than emergency repairs after a breakdown.

## Myth #2: "Going to Therapy Means We've Failed"

**The Truth:** Seeking help is a sign of strength, not weakness. It takes courage to acknowledge that your relationship could benefit from professional support and to commit to doing the work.

Some of the healthiest, most successful relationships include regular check-ins with a therapist — not because they're broken, but because the couple values their relationship enough to invest in it.

## Myth #3: "The Therapist Will Take Sides"

**The Truth:** A skilled couples therapist is not a judge or referee. Their role is to be a neutral facilitator who helps both partners feel heard, understood, and validated.

At Dunn Behavioral Health, our therapists create a safe, balanced space where both voices matter equally. The goal is never to declare a winner — it's to help you both win together.

## Myth #4: "Therapy Takes Years and Never Really Works"

**The Truth:** Many couples experience meaningful improvement in a relatively short time. Evidence-based approaches like Emotionally Focused Therapy (EFT) and the Gottman Method have strong research backing.

A 2020 meta-analysis found that couples therapy is effective for about 70% of couples, with many seeing significant improvements in just 8–12 sessions. While some couples benefit from longer-term work, it's not the default.

## Myth #5: "We Just Have Communication Problems — We Don't Need Therapy"

**The Truth:** Communication difficulties are among the most common reasons couples seek therapy — and they're absolutely worth addressing. What feels like a "simple" communication issue often masks deeper patterns of hurt, disconnection, or unmet needs.

A therapist can help you identify those patterns, break negative cycles, and learn specific skills for expressing needs, listening actively, and resolving conflict constructively.

## What Couples Therapy Actually Looks Like

In a typical session at Dunn Behavioral Health, you and your partner will:

- Share your perspectives in a safe, structured environment
- Work with the therapist to identify recurring patterns and triggers
- Learn evidence-based communication and conflict resolution skills
- Develop a shared vision for your relationship
- Build emotional intimacy and trust

## Is Couples Therapy Right for You?

If you and your partner are experiencing any of the following, therapy could help:

- Frequent arguments that never get resolved
- Feeling emotionally distant or disconnected
- Trust issues or recovering from infidelity
- Navigating major life changes (new baby, job loss, relocation)
- Intimacy concerns
- Parenting disagreements

You don't have to wait for a crisis. The best time to strengthen your relationship is now.
    `,
  },

  "trauma-healing-steps": {
    title: "Healing From Trauma: A Step-by-Step Guide",
    category: "Trauma",
    date: "March 18, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=85",
    excerpt: "Trauma recovery is not linear — but it is possible. Our therapists share the stages of healing and how to navigate them with support.",
    content: `
## Understanding Trauma

Trauma is not what happens to you — it's what happens inside you as a result of what happened to you. It's the lasting emotional response that can follow any experience that overwhelms your ability to cope, whether that's a single devastating event or prolonged exposure to stress and adversity.

Trauma can stem from:
- Childhood abuse, neglect, or abandonment
- Sexual or physical assault
- Natural disasters or accidents
- Combat or witnessing violence
- Sudden loss of a loved one
- Chronic illness or medical trauma
- Systemic trauma (racism, discrimination)

No two people experience trauma the same way. Something that deeply affects one person may not affect another — and that doesn't mean either response is wrong.

## The Impact of Unprocessed Trauma

When trauma goes unaddressed, it doesn't simply fade away. It lives in the body and mind, showing up as:

- **Post-Traumatic Stress Disorder (PTSD)** — flashbacks, nightmares, hypervigilance
- **Complex PTSD (C-PTSD)** — difficulty regulating emotions, distorted self-perception
- **Depression and anxiety**
- **Substance use** as a coping mechanism
- **Relationship difficulties** — trust issues, emotional numbness, or fear of intimacy
- **Physical symptoms** — chronic pain, autoimmune issues, digestive problems

## The Stages of Trauma Recovery

Healing is not linear. You may move forward, hit setbacks, and circle back — and that's completely normal. Most trauma-informed therapists recognize three broad phases of recovery:

### Stage 1: Safety and Stabilization

Before processing trauma directly, you need to feel safe — in your body, your environment, and your relationships. This stage focuses on:

- **Grounding techniques** to manage overwhelming emotions
- **Building a support network** of trusted people
- **Establishing routines** that provide structure and predictability
- **Self-care fundamentals** — sleep, nutrition, movement

This stage is foundational. Rushing past it can make trauma processing more difficult.

### Stage 2: Processing and Mourning

This is where you begin to confront and make sense of what happened. With professional support, you'll work through the memories, emotions, and beliefs that the trauma created. Evidence-based approaches include:

- **EMDR (Eye Movement Desensitization and Reprocessing)** — uses bilateral stimulation to help the brain reprocess traumatic memories
- **Trauma-Focused CBT** — identifies and reshapes negative thoughts and beliefs connected to trauma
- **Somatic therapies** — address trauma stored in the body through movement and body awareness
- **Narrative therapy** — helps you rewrite your story from one of victimhood to one of survival and resilience

### Stage 3: Reconnection and Integration

Healing doesn't mean forgetting. It means the trauma no longer controls your life. In this stage, you:

- Rebuild relationships and a sense of belonging
- Rediscover meaning and purpose
- Develop a new, healthy identity that incorporates your experience without being defined by it
- Find ways to give back — many survivors find healing in helping others

## Practical Steps You Can Take Today

While professional therapy is essential for trauma recovery, there are things you can do between sessions:

**1. Practice mindfulness** — Trauma pulls you into the past. Mindfulness anchors you in the present. Even 5 minutes of focused breathing can regulate your nervous system.

**2. Move your body** — Exercise, yoga, and dance help release trauma stored in the body. You don't need a gym — a daily walk counts.

**3. Limit triggers when possible** — While avoidance isn't a long-term solution, giving yourself permission to step back from triggering content while in early recovery is self-compassionate.

**4. Journal** — Writing about your experiences can help externalize thoughts and emotions, making them more manageable.

**5. Connect with others** — Isolation feeds trauma. Even small social interactions maintain important neural pathways associated with safety and trust.

## A Word on Courage

Seeking help for trauma takes enormous courage. If you've been carrying your pain alone, know that you don't have to. Healing is possible. People recover from trauma every day — and they go on to build lives of meaning, connection, and joy.

Our therapists at Dunn Behavioral Health are trained in trauma-informed care and will walk alongside you every step of the way.
    `,
  },

  "teen-mental-health-signs": {
    title: "Signs Your Teen May Need Mental Health Support",
    category: "Teen Support",
    date: "March 3, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1592947945242-69312358628b?w=1200&q=85",
    excerpt: "Adolescence is a challenging time. Here's how to recognize warning signs and start a conversation with your teenager about getting help.",
    content: `
## The Pressure of Adolescence

Being a teenager has never been easy. But today's adolescents face pressures that previous generations could scarcely imagine — social media comparison, academic competition, global uncertainty, and the always-on nature of digital life.

Mental health challenges among teens have risen sharply over the past decade. The CDC reports that approximately 1 in 5 adolescents has a diagnosable mental health disorder, yet most go untreated — often because parents and teens don't recognize the signs, or because stigma gets in the way.

Early intervention makes a profound difference. Here's what to look for.

## Warning Signs to Watch For

### Changes in Behavior

Every teen has bad days. What you're looking for are **persistent changes** — patterns that last two weeks or more and represent a shift from your teen's usual self.

- **Withdrawal** — pulling away from friends, family, or activities they used to enjoy
- **Declining academic performance** — dropping grades, skipping school, or losing interest in learning
- **Sleep changes** — sleeping far more or far less than usual
- **Eating changes** — appetite loss, binge eating, or signs of disordered eating
- **Increased risk-taking** — reckless behavior, substance experimentation, or unsafe situations

### Emotional Signs

- Persistent sadness, hopelessness, or emptiness
- Irritability, anger, or hostility that seems out of proportion
- Extreme mood swings
- Feeling worthless, guilty, or like a burden
- Talking about death, dying, or "not being here anymore" *(always take this seriously)*

### Physical Signs

- Unexplained aches, headaches, or fatigue
- Neglecting personal hygiene or appearance
- Signs of self-harm (cuts, burns, or hiding arms/legs)

### Social Signs

- Sudden change in friend group
- Withdrawal from social media or extreme increase in social media use
- Difficulty maintaining friendships
- Reports of bullying (online or in-person)

## When It's an Emergency

Seek immediate help if your teen:
- Talks about wanting to die or kill themselves
- Says they have no reason to live
- Talks about being a burden to others
- Is giving away possessions
- Shows signs of a mental health crisis (severe dissociation, psychosis)

**Call 988 (Suicide & Crisis Lifeline)** or go to your nearest emergency room.

## How to Start the Conversation

Many parents know something is wrong but don't know how to bring it up. Here's a framework that works:

**Choose the right moment.** Don't try to talk when your teen is rushed, distracted, or already upset. Side-by-side activities (a drive, a walk, cooking together) often work better than face-to-face.

**Lead with curiosity, not concern.** Instead of "I'm worried about you," try "I've noticed you seem quieter lately — how are things really going?" This opens a door rather than putting them on the defensive.

**Listen without fixing.** Resist the urge to immediately solve the problem or minimize their feelings. Saying "that sounds really hard" is often more healing than advice.

**Validate before you educate.** Your teen needs to feel heard before they'll be open to suggestions about getting help.

**Bring up therapy gently.** "I've been thinking — would you be open to talking to someone who really knows how to help with this stuff? Not because anything is wrong with you, but because you deserve support."

## What Therapy Can Do for Teens

Adolescent therapy provides a confidential space where teens can:

- Process difficult emotions without fear of judgment
- Develop coping strategies for stress, anxiety, and depression
- Build social and communication skills
- Work through trauma, family conflict, or identity questions
- Set goals and build confidence

Many teens who were initially resistant to therapy report that it became one of the most valuable experiences of their adolescence.

## Supporting Your Teen at Home

While professional support is important, your relationship with your teen matters enormously. Small, consistent actions build trust over time:

- **Be present** — put your phone away and give them your full attention
- **Don't lecture** — conversations, not monologues
- **Celebrate small wins** — noticing effort, not just outcomes
- **Take care of yourself** — you can't pour from an empty cup

At Dunn Behavioral Health, we work with teens and their families to create comprehensive support plans. We believe every young person deserves to feel understood, supported, and hopeful about their future.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: `${post.title} | Dunn Behavioral Health`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} style={{ fontFamily: "var(--font-cormorant, Georgia, serif)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--primary,#1a4a5a)", marginTop: "2.5rem", marginBottom: "1rem", fontWeight: 700 }}>
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} style={{ fontSize: "1.15rem", color: "var(--primary,#1a4a5a)", marginTop: "1.75rem", marginBottom: "0.6rem", fontWeight: 700 }}>
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*\s*[—–-]?\s*(.*)/);
      elements.push(
        <li key={i} style={{ marginBottom: "0.6rem", lineHeight: 1.75, color: "#4a5568" }}>
          {match ? <><strong style={{ color: "#2d3748" }}>{match[1]}</strong>{match[2] ? ` — ${match[2]}` : ""}</> : line.replace(/^- /, "")}
        </li>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} style={{ marginBottom: "0.5rem", lineHeight: 1.75, color: "#4a5568" }}>
          {line.replace("- ", "")}
        </li>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} style={{ fontWeight: 700, color: "#2d3748", marginBottom: "0.5rem" }}>
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else {
      const parsed = line
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/_(988 \(Suicide & Crisis Lifeline\))_/g, "$1");
      elements.push(
        <p key={i} style={{ marginBottom: "1.1rem", lineHeight: 1.85, color: "#4a5568", fontSize: "1.02rem" }}
          dangerouslySetInnerHTML={{ __html: parsed }}
        />
      );
    }
    i++;
  }

  // Wrap consecutive <li> in <ul>
  const wrapped: React.ReactNode[] = [];
  let ulBuffer: React.ReactNode[] = [];
  elements.forEach((el, idx) => {
    if ((el as React.ReactElement).type === "li") {
      ulBuffer.push(el);
    } else {
      if (ulBuffer.length) {
        wrapped.push(<ul key={`ul-${idx}`} style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>{ulBuffer}</ul>);
        ulBuffer = [];
      }
      wrapped.push(el);
    }
  });
  if (ulBuffer.length) wrapped.push(<ul key="ul-end" style={{ paddingLeft: "1.5rem", marginBottom: "1.25rem" }}>{ulBuffer}</ul>);

  return wrapped;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const otherPosts = Object.entries(posts)
    .filter(([s]) => s !== slug)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <div style={{ position: "relative", height: "clamp(280px,40vh,420px)", marginTop: 0 }}>
        <Image src={post.image} alt={post.title} fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(13,43,56,0.6) 0%, rgba(13,43,56,0.75) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "2.5rem", paddingTop: "6rem" }}>
          <span style={{ display: "inline-block", backgroundColor: "var(--accent,#c9a84c)", color: "#fff", padding: "0.25rem 0.9rem", borderRadius: 50, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em", marginBottom: "1rem" }}>
            {post.category}
          </span>
          <h1 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff", fontWeight: 700, lineHeight: 1.2, maxWidth: 720, marginBottom: "0.75rem" }}>
            {post.title}
          </h1>
          <div style={{ display: "flex", gap: "1rem", color: "rgba(255,255,255,0.75)", fontSize: "0.85rem" }}>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <div style={{ backgroundColor: "#fff", padding: "4rem 0 5rem" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr min(680px,100%) 1fr", gap: 0 }}>
          <div style={{ gridColumn: 2 }}>
            {/* Excerpt */}
            <p style={{ fontSize: "1.15rem", color: "var(--primary,#1a4a5a)", fontWeight: 600, lineHeight: 1.7, borderLeft: "4px solid var(--accent,#c9a84c)", paddingLeft: "1.25rem", marginBottom: "2.5rem" }}>
              {post.excerpt}
            </p>

            {/* Body */}
            <div>{renderContent(post.content)}</div>

            {/* CTA */}
            <div style={{ marginTop: "3rem", padding: "2rem", backgroundColor: "var(--bg-light,#f7f9fc)", borderRadius: 12, border: "1px solid var(--border,#e2e8f0)", textAlign: "center" }}>
              <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.6rem", color: "var(--primary,#1a4a5a)", marginBottom: "0.75rem" }}>
                Ready to Take the Next Step?
              </h3>
              <p style={{ color: "#718096", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                Our compassionate team at Dunn Behavioral Health is here to support you. Book a consultation today.
              </p>
              <Link href="/contact" className="btn-primary">Book an Appointment</Link>
            </div>

            {/* Back */}
            <div style={{ marginTop: "2rem" }}>
              <Link href="/blog" style={{ color: "var(--accent,#c9a84c)", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section style={{ backgroundColor: "var(--bg-light,#f7f9fc)", padding: "4rem 0" }}>
          <div className="container">
            <h2 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "2rem", color: "var(--primary,#1a4a5a)", marginBottom: "2rem", textAlign: "center" }}>
              More Articles
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
              {otherPosts.map(([s, p]) => (
                <Link key={s} href={`/blog/${s}`} style={{ textDecoration: "none", backgroundColor: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", display: "block" }}>
                  <div style={{ position: "relative", height: 180 }}>
                    <Image src={p.image} alt={p.title} fill sizes="400px" style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--accent,#c9a84c)", fontWeight: 700, letterSpacing: "0.06em" }}>{p.category}</span>
                    <h3 style={{ fontFamily: "var(--font-cormorant,Georgia,serif)", fontSize: "1.2rem", color: "var(--primary,#1a4a5a)", marginTop: "0.5rem", lineHeight: 1.35 }}>{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
