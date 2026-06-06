import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="grid-bg" />
      <div className="noise-overlay" />

      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-inner">
          {/* ── Left: Text ── */}
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span>⚡</span> Test Your Knowledge
            </div>

            <h1 className="hero-title">
              The Ultimate <span>Quiz</span> Challenge
            </h1>

            <p className="hero-desc">
              Battle through questions in Science, History, Technology & Math.
              Race the clock, track your scores, and climb the leaderboard.
            </p>

            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => navigate("/quiz")}>
                Start Quiz →
              </button>
              <button className="btn btn-ghost" onClick={() => navigate("/scores")}>
                View Scores
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-val">4</div>
                <div className="hero-stat-label">Categories</div>
              </div>
              <div>
                <div className="hero-stat-val">60</div>
                <div className="hero-stat-label">Questions</div>
              </div>
              <div>
                <div className="hero-stat-val">15s</div>
                <div className="hero-stat-label">Per Question</div>
              </div>
            </div>
          </div>

          {/* ── Right: SVG Illustration ── */}
          <div className="hero-visual">
            <svg
              className="brain-svg"
              width="380"
              height="380"
              viewBox="0 0 380 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer glow ring */}
              <circle cx="190" cy="190" r="170" stroke="rgba(0,212,255,0.08)" strokeWidth="1" />
              <circle cx="190" cy="190" r="145" stroke="rgba(0,212,255,0.12)" strokeWidth="1" strokeDasharray="4 8" />

              {/* Central hexagon */}
              <polygon
                points="190,80 260,122 260,210 190,252 120,210 120,122"
                fill="rgba(0,212,255,0.06)"
                stroke="rgba(0,212,255,0.3)"
                strokeWidth="1.5"
              />

              {/* Inner hexagon */}
              <polygon
                points="190,110 240,138 240,196 190,224 140,196 140,138"
                fill="rgba(192,132,252,0.06)"
                stroke="rgba(192,132,252,0.2)"
                strokeWidth="1"
              />

              {/* Question marks */}
              <text x="175" y="175" fontFamily="Syne, sans-serif" fontSize="52" fontWeight="800" fill="rgba(0,212,255,0.9)" textAnchor="middle">?</text>

              {/* Orbiting nodes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const cx = 190 + 145 * Math.cos(rad);
                const cy = 190 + 145 * Math.sin(rad);
                const colors = ["#00d4ff","#c084fc","#00e5a0","#ffb347","#ff4d6d","#00d4ff"];
                return (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="8" fill={colors[i]} opacity="0.9" />
                    <circle cx={cx} cy={cy} r="16" stroke={colors[i]} strokeWidth="1" opacity="0.3" fill="none" />
                    <line x1="190" y1="190" x2={cx} y2={cy} stroke={colors[i]} strokeWidth="0.5" opacity="0.2" />
                  </g>
                );
              })}

              {/* Category labels */}
              <text x="190" y="46" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="rgba(0,212,255,0.7)" fontWeight="600">SCIENCE</text>
              <text x="330" y="120" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="rgba(192,132,252,0.7)" fontWeight="600">TECH</text>
              <text x="330" y="268" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="rgba(0,229,160,0.7)" fontWeight="600">MATH</text>
              <text x="190" y="348" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="rgba(255,179,71,0.7)" fontWeight="600">HISTORY</text>
              <text x="52" y="268" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="rgba(255,77,109,0.7)" fontWeight="600">QUIZ</text>
              <text x="52" y="120" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontSize="10" fill="rgba(0,212,255,0.7)" fontWeight="600">TIMER</text>

              {/* Decorative dots */}
              {[30, 90, 150, 210, 270, 330].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const cx = 190 + 108 * Math.cos(rad);
                const cy = 190 + 108 * Math.sin(rad);
                return <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(255,255,255,0.1)" />;
              })}
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
