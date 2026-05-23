---
title: My Skills
type: skills
---

<head>
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
  <link rel="stylesheet" href="../../assets/css/main.css" />
  <link rel="stylesheet" href="../../assets/css/modern-components.css" />
</head>

<body>
  <main class="container">
    <section class="premium-skills">
      <style>
        /* === PREMIUM SKILLS SECTION === */
        .premium-skills { position: relative; padding: 36px 0 48px; overflow: hidden; }
        
        /* Background blur blobs */
        .premium-skills::before {
          content: '';
          position: absolute;
          top: -200px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(100, 200, 255, 0.05), transparent);
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        
        .premium-skills::after {
          content: '';
          position: absolute;
          bottom: -150px;
          right: -100px;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(255, 100, 200, 0.04), transparent);
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .skills-title {
          position: relative;
          z-index: 1;
          text-align: center;
          margin-bottom: 28px;
        }

        .skills-title h1 {
          font-size: clamp(2rem, 5vw, 3.25rem);
          background: linear-gradient(135deg, #1f2937 0%, #0ea5e9 55%, #1f2937 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          margin: 0;
          letter-spacing: -1px;
        }

        .skills-title p {
          color: #5b6679;
          margin-top: 8px;
          font-size: 1.1rem;
          font-weight: 400;
        }

        .skills-snapshot {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin: 0 auto 28px;
          max-width: 1040px;
        }

        .snapshot-card {
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(14, 165, 233, 0.12);
          border-radius: 18px;
          padding: 16px 18px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
        }

        .snapshot-kicker {
          display: inline-block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #0ea5e9;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .snapshot-card strong {
          display: block;
          color: #1f2937;
          font-size: 1rem;
          margin-bottom: 4px;
        }

        .snapshot-card span {
          display: block;
          color: #5b6679;
          font-size: 0.92rem;
          line-height: 1.45;
        }

        @media (max-width: 900px) {
          .skills-snapshot { grid-template-columns: 1fr; }
        }

        /* === RESPONSIVE GRID === */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
          position: relative;
          z-index: 2;
          margin-bottom: 40px;
        }

        @media (min-width: 768px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 767px) {
          .skills-grid { grid-template-columns: 1fr; }
          .skill-card { padding: 24px !important; }
        }

        /* === WHITE CARD WITH STRONG CONTRAST === */
        .skill-card {
          position: relative;
          padding: 24px;
          border-radius: 20px;
          background: #ffffff;
          border: none;
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          overflow: hidden;
          box-shadow: 
            0 8px 24px rgba(0, 0, 0, 0.12),
            0 2px 4px rgba(0, 0, 0, 0.08);
          min-height: 235px;
          display: flex;
          flex-direction: column;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(100, 180, 255, 0) 0%, rgba(100, 200, 255, 0.03) 50%, rgba(100, 180, 255, 0) 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
          border-radius: 20px;
        }

        /* === FEATURED CARD (AI/ML) === */
        .skill-card.featured {
          min-height: 245px;
          background: linear-gradient(135deg, #ffffff 0%, #f5f9ff 100%);
          border: 1px solid rgba(100, 200, 255, 0.2);
        }

        /* === HOVER EFFECTS === */
        .skill-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 
            0 16px 48px rgba(100, 200, 255, 0.2),
            0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .skill-card.featured:hover {
          box-shadow: 
            0 16px 56px rgba(100, 200, 255, 0.25),
            0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .skill-card:hover::before {
          opacity: 1;
        }

        /* === CARD CONTENT === */
        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .skill-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(100, 200, 255, 0.1), rgba(100, 200, 255, 0.05));
          border: 1px solid rgba(100, 200, 255, 0.2);
          font-size: 24px;
          transition: all 0.3s ease;
        }

        .skill-card:hover .skill-icon {
          background: linear-gradient(135deg, rgba(100, 200, 255, 0.2), rgba(100, 200, 255, 0.1));
          border-color: rgba(100, 200, 255, 0.4);
          transform: scale(1.1);
        }

        .skill-card h3 {
          margin: 0;
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a1a2e;
          letter-spacing: -0.5px;
          transition: all 0.3s ease;
        }

        .skill-card:hover h3 {
          color: #0066cc;
          transform: translateX(2px);
        }

        .skill-desc {
          color: #4a4a6a;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 14px;
          flex-grow: 1;
          position: relative;
          z-index: 1;
          font-weight: 400;
        }

        .skill-outcome {
          margin: 0 0 14px 0;
          color: #334155;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* === MODERN SKILL BADGES === */
        .skill-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          position: relative;
          z-index: 1;
        }

        .badge-skill {
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 600;
          background: linear-gradient(135deg, rgba(100, 200, 255, 0.1), rgba(100, 200, 255, 0.05));
          border: 1.5px solid rgba(100, 200, 255, 0.25);
          color: #0066cc;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .badge-skill::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(100, 200, 255, 0.15), transparent);
          transition: left 0.5s ease;
        }

        .skill-card:hover .badge-skill {
          background: linear-gradient(135deg, rgba(100, 200, 255, 0.15), rgba(100, 200, 255, 0.08));
          border-color: rgba(100, 200, 255, 0.4);
          transform: translateY(-2px);
        }

        .skill-card:hover .badge-skill::before {
          left: 100%;
        }

        /* === FLOATING ANIMATION === */
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        .skill-card {
          animation: floating 6s ease-in-out infinite;
        }

        .skill-card:nth-child(2) { animation-delay: 0.2s; }
        .skill-card:nth-child(3) { animation-delay: 0.4s; }
        .skill-card:nth-child(4) { animation-delay: 0.6s; }
        .skill-card:nth-child(5) { animation-delay: 0.8s; }

        .skill-card:hover {
          animation-play-state: paused;
        }
      </style>

      <div class="skills-title">
        <h1>Recruiter Snapshot</h1>
        <p>A concise view of how I build AI products, ship them to production, and support business outcomes.</p>
      </div>

      <div class="skills-snapshot" aria-label="Recruiter summary">
        <div class="snapshot-card">
          <span class="snapshot-kicker">Core strength</span>
          <strong>AI product delivery</strong>
          <span>LLM apps, RAG, prompt workflows, and applied NLP built for real use cases.</span>
        </div>
        <div class="snapshot-card">
          <span class="snapshot-kicker">Production focus</span>
          <strong>Reliable systems</strong>
          <span>Backend services, APIs, and deployment pipelines that support production AI.</span>
        </div>
        <div class="snapshot-card">
          <span class="snapshot-kicker">Delivery style</span>
          <strong>Clear, end-to-end execution</strong>
          <span>From prototype to rollout, with strong ownership across product, engineering, and cloud.</span>
        </div>
      </div>

      <div class="skills-grid">

        <!-- AI/ML - Featured Card -->
        <div class="skill-card featured">
          <div class="skill-card-header">
            <div class="skill-icon">🤖</div>
            <h3>AI / ML</h3>
          </div>
          <p class="skill-outcome">Best for roles needing AI product thinking</p>
          <p class="skill-desc">Builds LLM-driven systems, retrieval pipelines, and applied NLP solutions with a focus on practical outcomes and reliable user experiences.</p>
          <div class="skill-badges">
            <span class="badge-skill">NLP</span>
            <span class="badge-skill">Deep Learning</span>
            <span class="badge-skill">LLM</span>
            <span class="badge-skill">Prompt Eng</span>
            <span class="badge-skill">RAG</span>
            <span class="badge-skill">Transformers</span>
          </div>
        </div>

        <!-- AI Frameworks -->
        <div class="skill-card">
          <div class="skill-card-header">
            <div class="skill-icon">⚙️</div>
            <h3>AI Frameworks</h3>
          </div>
          <p class="skill-outcome">Best for agentic / RAG roles</p>
          <p class="skill-desc">Ships retrieval-augmented and agentic systems using production-friendly frameworks and custom orchestration patterns.</p>
          <div class="skill-badges">
            <span class="badge-skill">LangChain</span>
            <span class="badge-skill">LlamaIndex</span>
            <span class="badge-skill">Crew AI</span>
            <span class="badge-skill">MCP Server</span>
          </div>
        </div>

        <!-- Backend & APIs -->
        <div class="skill-card">
          <div class="skill-card-header">
            <div class="skill-icon">🔧</div>
            <h3>Backend & APIs</h3>
          </div>
          <p class="skill-outcome">Best for production engineering roles</p>
          <p class="skill-desc">Builds reliable backend services, APIs, and deployment-ready components that make AI products stable and scalable.</p>
          <div class="skill-badges">
            <span class="badge-skill">Python</span>
            <span class="badge-skill">FastAPI</span>
          </div>
        </div>

        <!-- Frontend -->
        <div class="skill-card">
          <div class="skill-card-header">
            <div class="skill-icon">🎨</div>
            <h3>Frontend</h3>
          </div>
          <p class="skill-outcome">Best for stakeholder-facing prototypes</p>
          <p class="skill-desc">Creates clean dashboards and rapid prototypes that help teams review product ideas, demos, and operational insights quickly.</p>
          <div class="skill-badges">
            <span class="badge-skill">React JS</span>
            <span class="badge-skill">Streamlit</span>
          </div>
        </div>

        <!-- DevOps & Cloud -->
        <div class="skill-card">
          <div class="skill-card-header">
            <div class="skill-icon">☁️</div>
            <h3>DevOps & Cloud</h3>
          </div>
          <p class="skill-outcome">Best for deployment and scale</p>
          <p class="skill-desc">Handles deployment automation, containerization, and cloud setup so prototypes can move into stable, repeatable workflows.</p>
          <div class="skill-badges">
            <span class="badge-skill">Docker</span>
            <span class="badge-skill">CI/CD</span>
            <span class="badge-skill">Azure</span>
            <span class="badge-skill">Git</span>
          </div>
        </div>

      </div>
    </section>
  </main>
</body>
