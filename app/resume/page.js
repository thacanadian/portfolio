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
        <nav
          className="resumeActions"
          aria-label="Résumé actions"
          style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
        >
          <a href="/" style={{ fontSize: 12, letterSpacing: ".12em" }}>
            ← PORTFOLIO
          </a>
          <button
            type="button"
            onClick={() => window.print()}
            style={{
              border: 0,
              background: "transparent",
              cursor: "pointer",
              fontSize: 12,
              letterSpacing: ".12em",
            }}
          >
            PRINT / SAVE PDF ↓
          </button>
        </nav>

        <header style={{ borderBottom: "2px solid #10161b", paddingBottom: 24, marginBottom: 26 }}>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(42px,7vw,72px)",
              fontWeight: 400,
              letterSpacing: "-.04em",
              margin: "22px 0 8px",
            }}
          >
            Noah Krynicki
          </h1>
          <p style={{ margin: "0 0 12px", color: "#596166" }}>
            Operations · Customer Success · Product Systems · Business Development
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
            Operations leader and product builder who turns rough ideas and messy workflows into clear,
            usable systems. Experience leading high-volume service teams, training 25+ teammates, building
            customer and sales workflows, and shipping software across Go, JavaScript, and React.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Experience</h2>

          <h3 style={jobStyle}>Andy’s Frozen Custard — Manager · 2025–Present</h3>
          <p style={bodyStyle}>
            Lead shifts of 4–7, coordinate customer flow and operating priorities, resolve service issues,
            and train teammates in a high-volume environment serving hundreds of guests each day.
          </p>

          <h3 style={jobStyle}>Raising Cane’s — Trainer · 2025–2026</h3>
          <p style={bodyStyle}>
            Promoted to Trainer and onboarded 20+ teammates across customer-service and kitchen operations
            while maintaining quality and pace during busy shifts.
          </p>

          <h3 style={jobStyle}>Apex Aircraft Care — Founder · 2026–Present</h3>
          <p style={bodyStyle}>
            Building a pre-launch DFW aircraft-care venture: brand and market research, service positioning,
            pricing and unit-economics work, prospecting and CRM systems, sales messaging, operating
            procedures, safety/compliance research, and an internal workflow application.
          </p>

          <h3 style={jobStyle}>Independent Projects — Product Builder · Ongoing</h3>
          <p style={bodyStyle}>
            Ship and document software products and prototypes, including FormForge, CinePulse, LeadsAI,
            AeroDetail OS, Neon City, Slice-to-Fit, and Gravity Shift.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Selected Projects</h2>
          <p style={bodyStyle}>
            <strong>FormForge:</strong> Local-first, multi-user fitness operating system built with Go and
            progressive-web-app patterns. <strong>CinePulse:</strong> Adaptive JavaScript movie recommender
            using profile signals, similarity scoring, recency weighting, and diversity reranking.{" "}
            <strong>LeadsAI / AeroDetail OS:</strong> Public-safe case studies in prospecting, CRM, outreach,
            quoting, and operations workflows.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Leadership & Education</h2>
          <p style={bodyStyle}>
            Led group teachings for 50+ students; experience across theater, music, live production, and
            technical operations. High School Diploma, May 2026; dual-enrollment and CS50 coursework.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Skills</h2>
          <p style={bodyStyle}>
            Team leadership · Training · Customer experience · Operations · CRM and prospecting · Business
            development · Go · JavaScript · React · HTML/CSS · Git · Product thinking · AI-assisted workflows
          </p>
        </section>
      </article>
    </main>
  );
}
