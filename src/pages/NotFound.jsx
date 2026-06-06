import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="grid-bg" />
      <div className="noise-overlay" />
      <div className="not-found">
        <div className="not-found-code">404</div>
        <h2>Page Not Found</h2>
        <p>Looks like this route doesn't exist. Did you wander off the quiz path?</p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
