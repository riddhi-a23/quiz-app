import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function getMotivationalMessage(score, total) {
  const pct = (score / total) * 100;
  if (pct === 100) return { emoji: "🏆", title: "Quiz Champion!",         msg: "Perfect score! Absolutely flawless!" };
  if (pct >= 80)   return { emoji: "🔥", title: "On Fire!",               msg: "Outstanding! You crushed it!" };
  if (pct >= 60)   return { emoji: "⚡", title: "Solid Work!",             msg: "Above average. Keep that momentum!" };
  if (pct >= 40)   return { emoji: "📚", title: "Almost There!",           msg: "Good effort. A bit more study will do it." };
  return            { emoji: "☕", title: "More Caffeine, Maybe?",         msg: "Rough one! Every expert was once a beginner." };
}

function fmt(secs) {
  if (secs < 60) return `${secs}s`;
  return `${Math.floor(secs / 60)}m ${secs % 60}s`;
}

export default function ScoreSummary() {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem("quizLastResult");
    if (!raw) { navigate("/scores"); return; }
    setResult(JSON.parse(raw));
  }, [navigate]);

  if (!result) return null;

  const { emoji, title, msg } = getMotivationalMessage(result.score, result.total);
  const pct = Math.round((result.score / result.total) * 100);

  const playAgain = () => {
    localStorage.removeItem("quizPlayer");
    localStorage.removeItem("quizLastResult");
    navigate("/quiz");
  };

  return (
    <div className="page">
      <div className="grid-bg" />
      <div className="noise-overlay" />

      <div className="score-page">
        <div className="score-card">
          <span className="score-emoji">{emoji}</span>
          <h2 className="score-title">{title}</h2>
          <p className="score-message">
            {result.name} — {msg}
          </p>

          <div className="score-number">{pct}%</div>
          <div className="score-label">
            {result.score} / {result.total} correct
          </div>

          <div className="score-stats">
            <div className="score-stat">
              <div className="score-stat-val" style={{ color: "var(--green)" }}>
                {result.score}
              </div>
              <div className="score-stat-label">Correct</div>
            </div>
            <div className="score-stat">
              <div className="score-stat-val" style={{ color: "var(--red)" }}>
                {result.total - result.score}
              </div>
              <div className="score-stat-label">Wrong</div>
            </div>
            <div className="score-stat">
              <div className="score-stat-val" style={{ color: "var(--cyan)" }}>
                {fmt(result.totalTime)}
              </div>
              <div className="score-stat-label">Total Time</div>
            </div>
          </div>

          {/* Bonus: Performance insights */}
          {result.fastestQ && (
            <div className="perf-stats">
              <h4>⚡ Performance Insights</h4>
              <div className="perf-row">
                <span>Category</span>
                <span style={{ textTransform: "capitalize" }}>{result.category}</span>
              </div>
              <div className="perf-row">
                <span>Difficulty</span>
                <span style={{ textTransform: "capitalize" }}>{result.difficulty}</span>
              </div>
              {result.fastestQ && (
                <div className="perf-row" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.2rem" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>⚡ Fastest answer on:</span>
                  <span style={{ color: "var(--green)", fontSize: "0.85rem" }}>
                    {result.fastestQ.length > 50 ? result.fastestQ.slice(0, 50) + "…" : result.fastestQ}
                  </span>
                </div>
              )}
              {result.slowestQ && result.slowestQ !== result.fastestQ && (
                <div className="perf-row" style={{ flexDirection: "column", alignItems: "flex-start", gap: "0.2rem" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>🐢 Slowest answer on:</span>
                  <span style={{ color: "var(--amber)", fontSize: "0.85rem" }}>
                    {result.slowestQ.length > 50 ? result.slowestQ.slice(0, 50) + "…" : result.slowestQ}
                  </span>
                </div>
              )}
              <div className="perf-row">
                <span>Avg. time per question</span>
                <span>{fmt(Math.round(result.totalTime / result.total))}</span>
              </div>
            </div>
          )}

          <div className="score-actions" style={{ marginTop: "1.5rem" }}>
            <button className="btn btn-primary" onClick={playAgain}>
              🔄 Play Again
            </button>
            <button className="btn btn-ghost" onClick={() => navigate("/scores")}>
              📊 Leaderboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
