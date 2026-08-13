"use client";

const sectionStyle = { marginTop: 28 };
const headingStyle = {
  marginBottom: 8,
  fontSize: 15,
  letterSpacing: ".1em",
  textTransform: "uppercase",
};
const jobStyle = { margin: "18px 0 5px", fontSize: 16 };
const bodyStyle = { margin: 0, color: "#3f474c", lineHeight: 1.65 };

export default function Resume() {
  return (
    <main
      className="resumePage"
      style={{
        background: "#efece3",
        minHeight: "100vh",
        color: "#10161b",
        fontFamily: "Arial, sans-serif",
        padding: "48px 20px",
      }}
    >
      <article
        style={{
          maxWidth: 900,
          margin: "0 auto",
          background: "#fffdf7",
          padding: "clamp(28px,6vw,64px)",
          boxShadow: "0 20px 70px rgba(16,22,27,.12)",
        }}
      >
        <nav className="resumeActions" aria-label="Résumé actions" style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
          <a href="/" style={{ fontSize: 12, letterSpacing: ".12em" }}>← PORTFOLIO</a>
          <button type="button" onClick={() => window.print()} style={{ border: 0, background: "transparent", cursor: "pointer", fontSize: 12, letterSpacing: ".12em" }}>
            PRINT / SAVE PDF ↓
          </button>
        </nav>

        <header style={{ borderBottom: "2px solid #10161b", paddingBottom: 24, marginBottom: 26 }}>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(42px,7vw,72px)", fontWeight: 400, letterSpacing: "-.04em", margin: "22px 0 8px" }}>
            Noah Krynicki
          </h1>
          <p style={{ margin: "0 0 12px", color: "#596166" }}>
            Product · Technical Operations · Business Systems · Customer Success
          </p>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7 }}>
            Fort Worth / DFW, Texas · <a href="mailto:noahwkry@gmail.com">noahwkry@gmail.com</a> ·{" "}
            <a href="https://github.com/thacanadian">github.com/thacanadian</a> ·{" "}
            <a href="https://www.linkedin.com/in/noah-krynicki-48513b312/">LinkedIn</a>
          </p>
        </header>

        <section>
          <h2 style={headingStyle}>Profile</h2>
          <p style={bodyStyle}>
            Product-minded builder and operations leader with hands-on experience shipping software, validating products with real beta users, building CRM and business systems, and leading high-volume teams. Combines Go and JavaScript product work with customer operations, training, business development, and zero-to-one execution.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Selected Technical Work</h2>

          <h3 style={jobStyle}>FormForge v1.8.0 — Product Builder / Developer · Go / PWA</h3>
          <p style={bodyStyle}>
            Built a privacy-focused, multi-user fitness operating system spanning training, nutrition, recovery, progress tracking, encrypted backups, and AI-assisted coaching. Recruited 20+ beta testers for real-world product validation and feedback, with documented architecture, security, testing, and beta metrics.
          </p>

          <h3 style={jobStyle}>CinePulse — Creator / Developer · JavaScript</h3>
          <p style={bodyStyle}>
            Built a responsive, local-first movie recommendation system using ratings, reactions, watch history, mood and genre signals, similarity, recency weighting, exploration, and diversity reranking.
          </p>

          <h3 style={jobStyle}>AeroDetail OS + LeadsAI — Product / Operations Systems</h3>
          <p style={bodyStyle}>
            Designed CRM, prospecting, outreach, quoting, job, client-record, and workflow systems connecting software design with practical sales and operating needs.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Professional Experience</h2>

          <h3 style={jobStyle}>Apex Aircraft Care — Founder (Pre-launch Venture) · 2026–Present</h3>
          <p style={bodyStyle}>
            Built a DFW aviation-service venture from concept through brand, market research, service positioning, pricing and unit economics, CRM structure, prospecting strategy, sales messaging, SOPs, and go-to-market systems. Translated operating requirements into documented workflows and internal software requirements.
          </p>

          <h3 style={jobStyle}>Andy’s Frozen Custard — Manager · 2025–Present</h3>
          <p style={bodyStyle}>
            Lead shifts of 4–7, coordinate customer flow and operating priorities, resolve service issues, support day-to-day operations, and train teammates in a high-volume environment.
          </p>

          <h3 style={jobStyle}>Raising Cane’s — Trainer · 2025–2026</h3>
          <p style={bodyStyle}>
            Promoted to Trainer and onboarded 20+ teammates across customer-service and kitchen operations while maintaining quality and pace during busy shifts.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Education & Credentials</h2>
          <p style={bodyStyle}>
            <strong>Bachelor of Business Administration</strong> — Western Governors University (WGU), Expected May 2028<br />
            <strong>Texas Real Estate Sales Agent Licensing</strong> — In Progress<br />
            <strong>High School Diploma</strong> — May 2026 · Dual-enrollment and CS50 coursework
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Leadership</h2>
          <p style={bodyStyle}>
            Led group teachings for 50+ students; experience across 16+ theater productions, music, live production, and technical operations.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Skills</h2>
          <p style={bodyStyle}>
            Go · JavaScript · React · TypeScript · Python · HTML/CSS · Git/GitHub · Progressive Web Apps · Local-first systems · Testing · Product documentation · CRM · Prospecting · Customer onboarding · Business development · AI-assisted workflows
          </p>
        </section>
      </article>
    </main>
  );
}
