export default function About() {
  const tech = [
    { icon: "⚛️", name: "React 18", desc: "Functional components with hooks for state management throughout the app." },
    { icon: "🔀", name: "React Router DOM", desc: "Client-side routing for a seamless multi-page feel in a single-page app." },
    { icon: "💾", name: "localStorage", desc: "Persists quiz results and player data across sessions — no backend needed!" },
    { icon: "🎨", name: "CSS Custom Properties", desc: "Design tokens and CSS variables for a consistent dark theme aesthetic." },
    { icon: "⚡", name: "Vite", desc: "Lightning-fast dev server and build tool. Hot module replacement is a dream." },
    { icon: "📐", name: "SVG Animations", desc: "Pure CSS animations on SVG elements for the floating hero illustration." },
  ];

  const learnings = [
    { icon: "🧠", name: "useState & useEffect", desc: "Mastered local state and side effects — timers, data loading, redirects." },
    { icon: "🔗", name: "React Router", desc: "Learned to wire up routes, nested paths, and programmatic navigation." },
    { icon: "⏱", name: "Timer Logic", desc: "Handling intervals with useRef to avoid stale closure bugs was tricky but rewarding." },
    { icon: "🗄️", name: "Data Persistence", desc: "localStorage as a mini-database — reading, writing, and syncing to UI." },
  ];

  const memes = [
    { emoji: "😭", top: "Me: I'll just fix this one CSS bug", bottom: "6 hours later: rewrote the entire layout" },
    { emoji: "🤔", top: "React developer brain:", bottom: "Everything is a component. My breakfast? A component." },
    { emoji: "💀", top: "npm install", bottom: "50 vulnerabilities found in 847 packages" },
    { emoji: "👁️", top: "Me writing the code:", bottom: "Me debugging the code 5 minutes later:" },
    { emoji: "🔥", top: "It works on my machine", bottom: "Ship the machine then." },
    { emoji: "😅", top: "Googling: how to center a div", bottom: "Software engineers with 10 years experience" },
  ];

  return (
    <div className="page">
      <div className="grid-bg" />
      <div className="noise-overlay" />

      <div className="about-page">
        <div className="container">
          {/* Hero */}
          <div className="about-hero" style={{ animation: "fadeUp 0.6s ease both" }}>
            <div className="badge badge-purple" style={{ marginBottom: "1rem", background: "rgba(192,132,252,0.1)", color: "var(--purple)", border: "1px solid rgba(192,132,252,0.2)" }}>
              About This App
            </div>
            <h1>Built with 🔥 and a lot of <span style={{ background: "linear-gradient(135deg, var(--cyan), var(--purple))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Stack Overflow</span></h1>
            <p style={{ marginTop: "1rem" }}>
              QuizForge is an interactive quiz web app.
              It's a full React SPA with routing, timers, persistence, and a leaderboard.
            </p>
          </div>

          {/* Tech Stack */}
          <h2 style={{ marginBottom: "1.25rem", fontSize: "1.5rem", animation: "fadeUp 0.6s 0.1s ease both" }}>
            🛠 Tech Stack
          </h2>
          <div className="about-grid" style={{ animation: "fadeUp 0.6s 0.15s ease both" }}>
            {tech.map((t) => (
              <div className="about-card" key={t.name}>
                <span className="about-card-icon">{t.icon}</span>
                <h3>{t.name}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>

          {/* What I learned */}
          <h2 style={{ marginBottom: "1.25rem", fontSize: "1.5rem", animation: "fadeUp 0.6s 0.2s ease both" }}>
            💡 What I Learned
          </h2>
          <div className="about-grid" style={{ animation: "fadeUp 0.6s 0.25s ease both" }}>
            {learnings.map((l) => (
              <div className="about-card" key={l.name}>
                <span className="about-card-icon">{l.icon}</span>
                <h3>{l.name}</h3>
                <p>{l.desc}</p>
              </div>
            ))}
          </div>

          {/* Memes section */}
          <div className="meme-section" style={{ animation: "fadeUp 0.6s 0.3s ease both" }}>
            <h2>😂 Dev Memes </h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
              Because Why Not
            </p>
            <div className="meme-grid">
              {memes.map((m, i) => (
                <div className="meme-card" key={i}>
                  <span className="meme-emoji">{m.emoji}</span>
                  <strong style={{ display: "block", fontSize: "0.95rem" }}>{m.top}</strong>
                  <p>{m.bottom}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{ textAlign: "center", padding: "3rem 0 1rem", color: "var(--text-faint)", fontSize: "0.85rem" }}>
            Built with ❤️
          </div>
        </div>
      </div>
    </div>
  );
}
