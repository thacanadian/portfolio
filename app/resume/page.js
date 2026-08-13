"use client";

const sectionStyle = { marginTop: 28 };
const headingStyle = { marginBottom: 8, fontSize: 15, letterSpacing: ".1em", textTransform: "uppercase" };
const jobStyle = { margin: "18px 0 5px", fontSize: 16 };
const bodyStyle = { margin: 0, color: "#3f474c", lineHeight: 1.65 };

export default function Resume() {
  return (
    <main className="resumePage" style={{ background: "#efece3", minHeight: "100vh", color: "#10161b", fontFamily: "Arial, sans-serif", padding: "48px 20px" }}>
      <article style={{ maxWidth: 900, margin: "0 auto", background: "#fffdf7", padding: "clamp(28px,6vw,64px)", boxShadow: "0 20px 70px rgba(16,22,27,.12)" }}>
        <nav className="resumeActions" aria-label="Résumé actions" style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
          <a href="/" style={{ fontSize: 12, letterSpacing: ".12em" }}>← PORTFOLIO</a>
          <button type="button" onClick={() => window.print()} style={{ border: 0, background: "transparent", cursor: "pointer", fontSize: 12, letterSpacing: ".12em" }}>PRINT / SAVE PDF ↓</button>
        </nav>
        <header style={{ borderBottom: "2px solid #10161b", paddingBottom: 24, marginBottom: 26 }}>
          <h1 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(42px,7vw,72px)", fontWeight: 400, letterSpacing: "-.04em", margin: "22px 0 8px" }}>Noah Krynicki</h1>
          <p style={{ margin: "0 0 12px", color: "#596166" }}>Software Development · Product Engineering · Technical Operations</p>
          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7 }}>Fort Worth / DFW, Texas · <a href="mailto:noahwkry@gmail.com">noahwkry@gmail.com</a> · <a href="https://github.com/thacanadian">GitHub</a> · <a href="https://www.linkedin.com/in/noah-krynicki-48513b312/">LinkedIn</a></p>
        </header>
        <section><h2 style={headingStyle}>Technical Skills</h2><p style={bodyStyle}>Go · Java · JavaScript · TypeScript · Python · HTML/CSS · PowerShell · React · React Native · PWA · Azure · Cloudflare · Vercel · Netlify · Render · Git/GitHub · GitHub Actions · CI/CD · unit/integration/browser testing · authentication · API integration · web scraping · OpenAI API · Gmail API · payment integrations</p></section>
        <section style={sectionStyle}><h2 style={headingStyle}>Selected Technical Work</h2>
          <h3 style={jobStyle}>FormForge — Founder & Software Developer · Go / React Native / PWA</h3><p style={bodyStyle}>Built and launched a multi-user fitness platform spanning training, nutrition, recovery, progress tracking, authentication, encrypted backups, AI-assisted coaching, and third-party API/payment integrations. Recruited 20+ beta testers for real-world validation and implemented automated testing and CI/CD workflows.</p>
          <h3 style={jobStyle}>AeroOps — Backend / Full-Stack Developer · In Development</h3><p style={bodyStyle}>Building a production-style aviation operations backend focused on authenticated services, reporting workflows, API documentation, automated testing, cloud deployment, and maintainable operational data systems.</p>
          <h3 style={jobStyle}>Minecraft Systems Development — Java / Fabric / Spigot / Paper</h3><p style={bodyStyle}>Developed custom Java mods/plugins implementing block-aware acoustic echo and echolocation mechanics, persistent world-history and structure-reclamation systems, and playable in-game guitar mechanics.</p>
          <h3 style={jobStyle}>CinePulse + LeadsAI — JavaScript / TypeScript</h3><p style={bodyStyle}>Built an adaptive local-first movie recommendation system and cross-platform lead-discovery/outreach tooling incorporating recommendation logic, responsive interfaces, APIs, automation, and web scraping.</p>
        </section>
        <section style={sectionStyle}><h2 style={headingStyle}>Experience</h2>
          <h3 style={jobStyle}>Apex Aircraft Care — Founder · 2026–Present</h3><p style={bodyStyle}>Built a DFW aviation-service venture from concept through market research, pricing/unit economics, CRM, prospecting, email automation, sales workflows, SOPs, and internal technology systems.</p>
          <h3 style={jobStyle}>Independent — Freelance Web Developer · Project-based</h3><p style={bodyStyle}>Supported 2–3 early-stage startup ventures with website code, UI/design, analytics, SEO, API integrations, deployment-related work, and ongoing maintenance on an unpaid independent-project basis.</p>
          <h3 style={jobStyle}>Andy’s Frozen Custard — Manager · 2025–Present</h3><p style={bodyStyle}>Lead shifts of 4–7 and serve as an informal technical escalation point for POS/payment terminals, printers, network/connectivity issues, tablets/registers, employee accounts, routers, kitchen displays, hardware replacement, software configuration, office computers, and vendor troubleshooting.</p>
          <h3 style={jobStyle}>Church Tech Team — Technical Production & IT Support · Volunteer</h3><p style={bodyStyle}>Supported AV routing, server setup, presentation systems, hardware/software troubleshooting, connectivity issues, and end-user technical support in a live-production environment.</p>
          <h3 style={jobStyle}>Raising Cane’s — Trainer · 2025–2026</h3><p style={bodyStyle}>Promoted to Trainer and onboarded 20+ teammates across customer-service and kitchen operations while maintaining quality and pace during busy shifts.</p>
        </section>
        <section style={sectionStyle}><h2 style={headingStyle}>Education & Credentials</h2><p style={bodyStyle}><strong>Bachelor of Business Administration</strong> — Western Governors University (WGU), Expected May 2028<br/><strong>Texas Real Estate Sales Agent Licensing</strong> — In Progress<br/><strong>High School Diploma</strong> — May 2026 · Dual-enrollment and CS50 coursework</p></section>
      </article>
    </main>
  );
}
