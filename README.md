# ⚡ QuizForge

An interactive quiz web app built with React. Test your knowledge across multiple categories, race against a timer, and track your scores on a leaderboard.

**Live Demo → [quizforge.live](https://quiz-app-fawn-eta-28.vercel.app/)**

---

## Features

- 🧠 **4 Categories** — Science, History, Technology, Mathematics
- 🎯 **3 Difficulty Levels** — Easy, Medium, Hard
- ⏱ **15-second timer** per question with auto-skip on timeout
- ✅ **Answer locking** with correct/incorrect highlighting
- 🔙 **Go back** and change answers while time is remaining
- 📊 **Progress bar** and question counter
- 🏆 **Leaderboard** with sort by score, time, or date
- 💾 **Persistent scores** via localStorage — survives page refresh
- ⚡ **Performance insights** — fastest/slowest question stats
- 📱 **Fully responsive** with hamburger menu on mobile

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI & component logic |
| React Router DOM | Client-side routing |
| Vite | Build tool & dev server |
| CSS Custom Properties | Theming & design system |
| localStorage | Data persistence |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/riddhi-a23/quiz-app.git

# Navigate into the folder
cd quiz-app

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed navbar with hamburger menu
│   └── ProgressBar.jsx   # Reusable progress bar
├── pages/
│   ├── Home.jsx          # Landing page with SVG animation
│   ├── Quiz.jsx          # Player setup form
│   ├── QuizStart.jsx     # Quiz engine with timer
│   ├── ScoreSummary.jsx  # Results & performance stats
│   ├── Scores.jsx        # Leaderboard
│   ├── About.jsx         # About page
│   └── NotFound.jsx      # 404 page
└── data/
    └── questions.js      # 60 questions across 4 categories
```

---

## Screenshots



---

## License

MIT