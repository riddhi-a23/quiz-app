import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import ProgressBar from "../components/ProgressBar";

const TIMER_SECONDS = 15;
const LETTERS = ["A", "B", "C", "D"];

function getMotivationalMessage(score, total) {
  const pct = (score / total) * 100;
  if (pct === 100) return { emoji: "🏆", title: "Quiz Champion!", msg: "Perfect score! Absolutely flawless!" };
  if (pct >= 80)  return { emoji: "🔥", title: "On Fire!",         msg: "Outstanding performance. You crushed it!" };
  if (pct >= 60)  return { emoji: "⚡", title: "Solid Work!",       msg: "Above average. Keep that momentum!" };
  if (pct >= 40)  return { emoji: "📚", title: "Almost There!",     msg: "Good effort. A bit more study will do it." };
  return           { emoji: "☕", title: "More Caffeine, Maybe?",   msg: "Rough one! Every expert was once a beginner." };
}

export default function QuizStart() {
  const navigate = useNavigate();
  const playerRaw = localStorage.getItem("quizPlayer");

  // Redirect if no player set up
  useEffect(() => {
    if (!playerRaw) navigate("/quiz");
  }, [playerRaw, navigate]);

  const player = playerRaw ? JSON.parse(playerRaw) : null;
  const qs = player
    ? (questions[player.category]?.[player.difficulty] || [])
    : [];

  const [current, setCurrent]     = useState(0);
  const [answers, setAnswers]     = useState({}); // { qIndex: optionStr }
  const [locked, setLocked]       = useState(false);
  const [timeLeft, setTimeLeft]   = useState(TIMER_SECONDS);
  const [finished, setFinished]   = useState(false);
  const [timings, setTimings]     = useState({}); // { qIndex: secondsTaken }
  const [startTime, setStartTime] = useState(Date.now());
  const timerRef = useRef(null);

  // ── Timer ──────────────────────────────────────────
  const goNext = useCallback(() => {
    if (current < qs.length - 1) {
      setCurrent((p) => p + 1);
      setLocked(false);
      setTimeLeft(TIMER_SECONDS);
      setStartTime(Date.now());
    } else {
      setFinished(true);
    }
  }, [current, qs.length]);

  useEffect(() => {
    if (finished || locked) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          // Record timing for auto-skip (no answer)
          setTimings((prev) => ({ ...prev, [current]: TIMER_SECONDS }));
          setLocked(true);
          setTimeout(goNext, 800);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [current, locked, finished, goNext]);

  // ── Select answer ──────────────────────────────────
  const selectOption = (opt) => {
    if (locked) return;
    clearInterval(timerRef.current);
    const taken = TIMER_SECONDS - timeLeft;
    setTimings((prev) => ({ ...prev, [current]: taken }));
    setAnswers((prev) => ({ ...prev, [current]: opt }));
    setLocked(true);
  };

  // ── Navigate questions ──────────────────────────────
  const goPrev = () => {
    if (current === 0) return;
    clearInterval(timerRef.current);
    setCurrent((p) => p - 1);
    setLocked(!!answers[current - 1]); // lock if already answered
    setTimeLeft(TIMER_SECONDS);
    setStartTime(Date.now());
  };

  // ── Save result & redirect ──────────────────────────
  useEffect(() => {
    if (!finished || !player) return;

    const correctCount = qs.filter((q, i) => answers[i] === q.answer).length;
    const totalTime = Object.values(timings).reduce((a, b) => a + b, 0);
    const fastestIdx = Object.entries(timings).sort((a, b) => a[1] - b[1])[0]?.[0];
    const slowestIdx = Object.entries(timings).sort((a, b) => b[1] - a[1])[0]?.[0];

    const result = {
      id: Date.now(),
      name: player.name,
      category: player.category,
      difficulty: player.difficulty,
      score: correctCount,
      total: qs.length,
      totalTime,
      timings,
      fastestQ: fastestIdx !== undefined ? qs[fastestIdx]?.question : null,
      slowestQ: slowestIdx !== undefined ? qs[slowestIdx]?.question : null,
      date: new Date().toLocaleDateString(),
      answers,
      questions: qs,
    };

    // Save to leaderboard
    const prev = JSON.parse(localStorage.getItem("quizResults") || "[]");
    prev.push(result);
    localStorage.setItem("quizResults", JSON.stringify(prev));

    // Save summary for score page
    localStorage.setItem("quizLastResult", JSON.stringify(result));

    navigate("/scores/summary");
  }, [finished]);

  if (!player || qs.length === 0) return null;

  const q = qs[current];
  const selectedAnswer = answers[current];
  const timerPct = (timeLeft / TIMER_SECONDS) * 100;
  const isDanger = timeLeft <= 5;

  return (
    <div className="page">
      <div className="grid-bg" />
      <div className="noise-overlay" />

      <div className="quiz-engine">
        {/* Header */}
        <div className="quiz-header">
          <div>
            <div className="quiz-meta">
              {player.name} · {player.category} · {player.difficulty}
            </div>
          </div>
          <div className={`quiz-timer${isDanger ? " danger" : ""}`}>
            ⏱ {timeLeft}s
          </div>
        </div>

        {/* Progress */}
        <div className="quiz-progress-wrap">
          <div className="quiz-q-count">
            <span>Question {current + 1} of {qs.length}</span>
            <span>{Object.keys(answers).length} answered</span>
          </div>
          <ProgressBar value={current + 1} max={qs.length} />

          <div className="timer-bar-wrap">
            <div
              className={`timer-bar-fill${isDanger ? " danger" : ""}`}
              style={{ width: `${timerPct}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="question-card" key={current}>
          <div className="question-text">{q.question}</div>

          <div className="options-grid">
            {q.options.map((opt, i) => {
              let cls = "option-btn";
              if (locked) {
                if (opt === q.answer) cls += " correct";
                else if (opt === selectedAnswer && selectedAnswer !== q.answer) cls += " wrong";
              } else if (opt === selectedAnswer) {
                cls += " selected";
              }

              return (
                <button
                  key={opt}
                  className={cls}
                  onClick={() => selectOption(opt)}
                  disabled={locked}
                >
                  <span className="option-letter">{LETTERS[i]}</span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="quiz-nav">
          <button
            className="btn btn-ghost"
            onClick={goPrev}
            disabled={current === 0}
          >
            ← Back
          </button>

          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            {locked && current < qs.length - 1 && "Answer locked — moving on…"}
          </span>

          <button
            className="btn btn-primary"
            onClick={goNext}
            disabled={!locked}
          >
            {current === qs.length - 1 ? "Finish ✓" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}
