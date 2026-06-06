import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function fmt(secs) {
  if (!secs && secs !== 0) return "—";
  if (secs < 60) return `${secs}s`;
  return `${Math.floor(secs / 60)}m ${secs % 60}s`;
}

const DIFF_COLORS = { easy: "green", medium: "amber", hard: "red" };

export default function Scores() {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState("score"); // "score" | "time" | "date"

  useEffect(() => {
    const raw = localStorage.getItem("quizResults");
    if (raw) setResults(JSON.parse(raw));
  }, []);

  const sorted = [...results].sort((a, b) => {
    if (sortBy === "score") return b.score / b.total - a.score / a.total;
    if (sortBy === "time")  return a.totalTime - b.totalTime;
    if (sortBy === "date")  return b.id - a.id;
    return 0;
  });

  const clearAll = () => {
    if (window.confirm("Clear all leaderboard data?")) {
      localStorage.removeItem("quizResults");
      setResults([]);
    }
  };

  return (
    <div className="page">
      <div className="grid-bg" />
      <div className="noise-overlay" />

      <div className="leaderboard-page">
        <div className="container">
          <div className="section-header" style={{ animation: "fadeUp 0.6s ease both" }}>
            <div className="badge badge-amber" style={{ marginBottom: "0.75rem" }}>
              🏅 Leaderboard
            </div>
            <h2>Hall of Fame</h2>
            <p>All past quiz attempts, sorted by your choice.</p>
          </div>

          {results.length > 0 && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div className="leaderboard-controls">
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginRight: "0.25rem" }}>Sort by:</span>
                {["score", "time", "date"].map((s) => (
                  <button
                    key={s}
                    className={`sort-btn${sortBy === s ? " active" : ""}`}
                    onClick={() => setSortBy(s)}
                  >
                    {s === "score" ? "🏆 Score" : s === "time" ? "⏱ Time" : "📅 Date"}
                  </button>
                ))}
              </div>
              <button className="btn btn-ghost" style={{ fontSize: "0.8rem", padding: "0.4rem 0.8rem" }} onClick={clearAll}>
                🗑 Clear All
              </button>
            </div>
          )}

          {sorted.length === 0 ? (
            <div className="card empty-state">
              <span className="empty-icon">🎮</span>
              <h3 style={{ marginBottom: "0.5rem" }}>No attempts yet</h3>
              <p style={{ marginBottom: "1.5rem" }}>Complete a quiz to see your scores here.</p>
              <button className="btn btn-primary" onClick={() => navigate("/quiz")}>
                Take a Quiz →
              </button>
            </div>
          ) : (
            <div className="card" style={{ padding: "0", overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <table className="leaderboard-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Player</th>
                      <th>Category</th>
                      <th>Difficulty</th>
                      <th>Score</th>
                      <th>Time</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((r, idx) => {
                      const pct = Math.round((r.score / r.total) * 100);
                      const rankCls =
                        idx === 0 ? "rank-1"
                        : idx === 1 ? "rank-2"
                        : idx === 2 ? "rank-3"
                        : "rank-other";
                      return (
                        <tr key={r.id}>
                          <td>
                            <div className={`rank-badge ${rankCls}`}>{idx + 1}</div>
                          </td>
                          <td style={{ fontWeight: 600 }}>{r.name}</td>
                          <td style={{ textTransform: "capitalize", color: "var(--text-muted)" }}>{r.category}</td>
                          <td>
                            <span className={`badge badge-${DIFF_COLORS[r.difficulty] || "cyan"}`}>
                              {r.difficulty}
                            </span>
                          </td>
                          <td>
                            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: pct >= 60 ? "var(--green)" : "var(--red)" }}>
                              {pct}%
                            </span>
                            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginLeft: "0.35rem" }}>
                              ({r.score}/{r.total})
                            </span>
                          </td>
                          <td style={{ color: "var(--cyan)", fontWeight: 600 }}>{fmt(r.totalTime)}</td>
                          <td style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{r.date}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
