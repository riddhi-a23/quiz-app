import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CATEGORIES = ["science", "history", "technology", "mathematics"];
const DIFFICULTIES = ["easy", "medium", "hard"];

export default function Quiz() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", category: "", difficulty: "" });

  const isValid = form.name.trim() && form.category && form.difficulty;

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!isValid) return;

    const playerData = {
      name: form.name.trim(),
      category: form.category,
      difficulty: form.difficulty,
      startedAt: Date.now(),
    };

    localStorage.setItem("quizPlayer", JSON.stringify(playerData));
    navigate("/quiz/start");
  };

  return (
    <div className="page">
      <div className="grid-bg" />
      <div className="noise-overlay" />

      <div className="quiz-setup">
        <div className="quiz-setup-card">
          <div style={{ marginBottom: "1.5rem" }}>
            <span className="badge badge-cyan" style={{ marginBottom: "0.75rem" }}>
              Step 1 of 2
            </span>
            <h2>Who's Playing?</h2>
            <p>Fill in your details to start the quiz experience.</p>
          </div>

          <div className="quiz-setup-form">
            <div className="form-group">
              <label htmlFor="name">Player Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name..."
                value={form.name}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Quiz Category</label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
              >
                <option value="">Choose a category...</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c.charAt(0).toUpperCase() + c.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="difficulty">Difficulty Level</label>
              <select
                id="difficulty"
                name="difficulty"
                value={form.difficulty}
                onChange={handleChange}
              >
                <option value="">Choose difficulty...</option>
                {DIFFICULTIES.map((d) => (
                  <option key={d} value={d}>
                    {d.charAt(0).toUpperCase() + d.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}
              disabled={!isValid}
              onClick={handleSubmit}
            >
              Let's Go →
            </button>

            {!isValid && (
              <p style={{ textAlign: "center", fontSize: "0.8rem", color: "var(--text-faint)" }}>
                Fill all fields to enable the start button
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
