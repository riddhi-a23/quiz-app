import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizStart from "./pages/QuizStart";
import ScoreSummary from "./pages/ScoreSummary";
import Scores from "./pages/Scores";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/quiz"          element={<Quiz />} />
        <Route path="/quiz/start"    element={<QuizStart />} />
        <Route path="/scores"        element={<Scores />} />
        <Route path="/scores/summary" element={<ScoreSummary />} />
        <Route path="/about"         element={<About />} />
        <Route path="*"              element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
