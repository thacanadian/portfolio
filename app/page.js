"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    name: "FormForge",
    type: "Product",
    status: "v1.8.0",
    description:
      "A privacy-focused, local-first, multi-user fitness operating system for training, nutrition, recovery, progress, encrypted backups, and AI-assisted coaching.",
    tags: ["Go", "PWA", "Local-first", "Security"],
    href: "https://github.com/thacanadian/Formforge",
    cta: "View source",
    visual: "fitness",
  },
  {
    number: "02",
    name: "CinePulse",
    type: "Product",
    status: "Prototype",
    description:
      "An adaptive, local-first movie discovery system that learns from ratings, reactions, watch history, genres, moods, recency, and exploration preferences.",
    tags: ["JavaScript", "Recommendation ML", "Local-first", "Responsive UI"],
    href: "https://github.com/thacanadian/cinepulse",
    cta: "View source",
    visual: "cinepulse",
  },
  {
    number: "03",
    name: "LeadsAI",
    type: "Product",
    status: "Case study",
    description:
      "A cross-platform lead discovery, outreach, and sales-pipeline system designed to give small businesses one focused prospecting workspace.",
    tags: ["TypeScript", "React Native", "Electron", "APIs"],
    href: "https://github.com/thacanadian/LeadsAI",
    cta: "View case study",
    visual: "leads",
  },
  {
    number: "04",
    name: "AeroDetail OS",
    type: "Software",
    status: "v2.1.4",
    description:
      "A secure aircraft-detailing sales and operations system with lead research, CRM, quoting, job workflows, client records, team access, and encrypted backups.",
    tags: ["Python", "JavaScript", "Security", "Operations"],
    href: "https://github.com/thacanadian/AeroDetail-OS",
    cta: "View case study",
    visual: "operations",
  },
  {
    number: "05",
    name: "Neon City",
    type: "Game",
    status: "Experiment",
    description:
      "A browser-based open-world game experiment with driving, missions, police AI, weapons, progression, and a living city sandbox.",
    tags: ["JavaScript", "Game Systems", "Canvas", "AI Behavior"],
    href: "https://github.com/thacanadian/Neon-City",
    cta: "View source",
    visual: "city",
  },
  {
    number: "06",
    name: "Slice-to-Fit",
    type: "Game",
    status: "Prototype",
    description:
      "A self-contained browser game about slicing objects into the right shape, managing limited attempts, and launching pieces through moving cutouts.",
    tags: ["JavaScript", "Canvas", "Touch", "Game Design"],
    href: "https://github.com/thacanadian/Slice-to-Fit",
    cta: "View source",
    visual: "slice",
  },
  {
    number: "07",
    name: "Gravity Shift",
    type: "Game",
    status: "Playable",
    description:
      "A self-contained physics puzzle game with eight chambers, directional gravity, star ratings, responsive controls, and local progression.",
    tags: ["JavaScript", "Canvas", "Physics", "Mobile"],
    href: "https://github.com/thacanadian/gravity-shift-game",
    cta: "View source",
    visual: "gravity",
  },
  {
    number: "08",
    name: "Apex Aircraft Care",
    type: "Venture",
    status: "Launching",
    description:
      "A DFW aircraft appearance company built from the ground up—from positioning and unit economics to operations, outreach, CRM systems, and service standards.",
    tags: ["Founder", "Operations", "Sales Systems", "Brand"],
    href: "https://github.com/thacanadian/Apex-Aircraft-Care",
    cta: "View case study",
    visual: "apex",
  },
];

function Mark() {
  return (
    <svg viewBox="0 0 48 48" aria-label="NK monogram" role="img">
      <rect x="1" y="1" width="46" height="46" rx="2" />
      <path d="M13 34V14l12 20V14M25 25l11-11M29 21l8 13" />
    </svg>
  );
}

function Arrow({ diagonal = false }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {diagonal ? <path d="M6 18 18 6M9 6h9v9" /> : <path d="M5 12h14M14 7l5 5-5 5" />}
    </svg>
  );
}

function ProjectVisual({ kind }) {
  if (kind === "fitness") {
    return (
      <div className="visual fitness-visual">
        <span className="eyebrow">TODAY / PUSH</span>
        <div className="rings"><i /><i /><i /></div>
        <div className="metric"><b>2,340</b><small>KCAL TRACKED</small></div>
        <div className="chart"><i/><i/><i/><i/><i/><i/><i/></div>
      </div>
    );
  }
  if (kind === "cinepulse") {
    return (
      <div className="visual cinepulse-visual">
        <span className="cinepulse-label">YOUR TASTE / LIVE</span>
        <div className="cinepulse-screen">
          <div className="cinepulse-orb"><i>▶</i></div>
          <b>94% MATCH</b>
          <div className="cinepulse-wave"><i/><i/><i/><i/><i/><i/><i/></div>
        </div>
        <p>MOVIES THAT GET YOU</p>
      </div>
    );
  }
  if (kind === "leads") {
    return (
      <div className="visual leads-visual">
        <div className="search-line">Find high-intent local prospects <span>↵</span></div>
        <div className="lead-row"><i>92</i><p><b>Qualified account</b><small>Decision maker identified</small></p><em>READY</em></div>
        <div className="lead-row faded"><i>84</i><p><b>Strong fit</b><small>Recent growth signal</small></p><em>REVIEW</em></div>
        <div className="lead-row faded more"><i>79</i><p><b>Potential fit</b><small>Needs enrichment</small></p><em>QUEUE</em></div>
      </div>
    );
  }
  if (kind === "city") {
    return (
      <div className="visual city-visual">
        <div className="moon" />
        <div className="building b1" /><div className="building b2" /><div className="building b3" />
        <div className="road"><span /></div>
        <p>HEAT <b>● ● ● ○ ○</b></p>
      </div>
    );
  }
  if (kind === "operations") {
    return (
      <div className="visual operations-visual">
        <span>OPERATIONS / LIVE</span>
        <div className="ops-card"><small>ACTIVE PIPELINE</small><b>24</b><i>+18%</i></div>
        <div className="ops-grid"><i /><i /><i /><i /><i /><i /></div>
        <p>LEADS&nbsp;&nbsp; QUOTES&nbsp;&nbsp; JOBS&nbsp;&nbsp; CLIENTS</p>
      </div>
    );
  }
  if (kind === "slice") {
    return (
      <div className="visual slice-visual">
        <span className="cut-line" />
        <i className="slice-piece one" /><i className="slice-piece two" />
        <div className="cutout"><span /></div>
        <p>SLICE · SELECT · LAUNCH</p>
      </div>
    );
  }
  if (kind === "gravity") {
    return (
      <div className="visual gravity-visual">
        <div className="gravity-board">
          <i className="gravity-player" />
          <span className="gravity-arrow">↑</span>
          <b className="gravity-hazard">◆</b>
          <em>★</em>
        </div>
        <p>SHIFT GRAVITY · CLEAR THE CHAMBER</p>
      </div>
    );
  }
  return (
    <div className="visual apex-visual">
      <div className="flight-line" />
      <div className="plane">✦</div>
      <p>APEX <span>AIRCRAFT CARE</span></p>
      <small>DFW / TEXAS</small>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeType, setActiveType] = useState("All");

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
    return () => reveal.disconnect();
  }, [activeType]);

  const filtered = activeType === "All" ? projects : projects.filter((p) => p.type === activeType);

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Noah Krynicki home"><Mark /></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <a className="nav-cta" href="mailto:noahwkry@gmail.com">
          Email me <Arrow diagonal />
        </a>
        <button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span/><span/>
        </button>
      </nav>

      <header id="top" className="hero shell">
        <div className="availability"><i /> OPEN TO THE RIGHT OPPORTUNITY</div>
        <h1>
          I build things that<br />
          <span>move ideas forward.</span>
        </h1>
        <div className="hero-bottom">
          <p>
            I’m <strong>Noah Krynicki</strong>, a DFW-based builder and founder creating useful software,
            thoughtful systems, and businesses from zero to one.
          </p>
          <a className="circle-link" href="#work" aria-label="Explore selected work"><Arrow /></a>
        </div>
        <div className="hero-index">
          <span>18 / DFW, TX</span>
          <span>SOFTWARE · SYSTEMS · BUSINESS</span>
        </div>
      </header>

      <section id="work" className="work-section">
        <div className="shell">
          <div className="section-head reveal">
            <div><span className="section-no">01</span><h2>Selected work</h2></div>
            <p>A few products, experiments, and ventures I’m actively shaping.</p>
          </div>
          <div className="filters reveal" aria-label="Filter projects">
            {["All", "Product", "Software", "Game", "Venture"].map((type) => (
              <button key={type} className={activeType === type ? "active" : ""} onClick={() => setActiveType(type)}>{type}</button>
            ))}
          </div>
          <div className="project-grid">
            {filtered.map((project) => (
              <article className="project reveal" key={project.name}>
                <a href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <ProjectVisual kind={project.visual} />
                  <div className="project-meta"><span>{project.number} / {project.type}</span><em>{project.status}</em></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-link">{project.cta}<Arrow diagonal /></div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section shell">
        <div className="section-head reveal">
          <div><span className="section-no">02</span><h2>About</h2></div>
        </div>
        <div className="about-grid">
          <div className="portrait reveal">
            <img src="https://avatars.githubusercontent.com/u/146765811?v=4" alt="Noah Krynicki" />
            <div className="portrait-label"><span>NOAH KRYNICKI</span><span>FORT WORTH, TEXAS</span></div>
          </div>
          <div className="about-copy reveal">
            <p className="lead">Part founder, part developer, always learning by building.</p>
            <p>
              I’m most energized when an idea is still rough—when it needs structure, taste, and someone willing to make the first real version. My work sits at the intersection of software, operations, sales, and design.
            </p>
            <p>
              I don’t collect buzzwords. I learn tools by putting them to work: building apps, designing systems for a real business, testing ideas, talking to customers, and improving what breaks.
            </p>
            <div className="principles">
              <div><b>01</b><span>Build before bragging</span></div>
              <div><b>02</b><span>Make complex things clear</span></div>
              <div><b>03</b><span>Stay curious and useful</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="shell">
          <div className="section-head reveal">
            <div><span className="section-no">03</span><h2>Experience</h2></div>
            <p>A practical mix of building, leading, selling, and serving.</p>
          </div>
          <div className="timeline reveal">
            <div className="timeline-row">
              <span>2026 — NOW</span><h3>Apex Aircraft Care</h3><p>Founder</p><em>Built the brand, research, operating systems, service strategy, CRM, and go-to-market foundation.</em>
            </div>
            <div className="timeline-row">
              <span>2025 — NOW</span><h3>Independent Projects</h3><p>Builder</p><em>Designing and developing software products, browser games, workflow tools, and digital experiments.</em>
            </div>
            <div className="timeline-row">
              <span>2024 — 2026</span><h3>Service Operations</h3><p>Trainer & Manager</p><em>Led busy shifts, trained teammates, solved customer problems, and learned how strong operations work in practice.</em>
            </div>
            <div className="timeline-row">
              <span>ONGOING</span><h3>Community Leadership</h3><p>Teacher & Creative</p><em>Led group teachings for 50+ students and contributed across theater, music, production, and live technology.</em>
            </div>
          </div>
          <div className="capabilities reveal">
            <span>Go</span><span>JavaScript</span><span>React</span><span>HTML / CSS</span><span>Product Thinking</span><span>AI Workflows</span><span>CRM Systems</span><span>Operations</span><span>Sales</span><span>Git</span><span>Leadership</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section shell">
        <span className="section-no reveal">04 / CONTACT</span>
        <h2 className="reveal">Have something worth<br/><em>building?</em></h2>
        <p className="reveal">I’m always interested in ambitious projects, good people, and opportunities where initiative matters.</p>
        <div className="contact-actions reveal">
          <a className="contact-button" href="mailto:noahwkry@gmail.com">Email me <Arrow diagonal /></a>
          <a className="contact-button secondary" href="https://www.linkedin.com/in/noah-krynicki-48513b312/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
        </div>
      </section>

      <footer className="footer shell">
        <Mark />
        <p>© {new Date().getFullYear()} Noah Krynicki</p>
        <div><a href="mailto:noahwkry@gmail.com">Email</a><a href="https://www.linkedin.com/in/noah-krynicki-48513b312/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/thacanadian" target="_blank" rel="noreferrer">GitHub</a><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
