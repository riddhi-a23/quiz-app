import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/quiz", label: "Start Quiz" },
    { to: "/scores", label: "Scores" },
    { to: "/about", label: "About" },
  ];

  const handleNav = (to) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="nav-logo">
          <span className="nav-logo-dot" />
          QuizForge 
        </NavLink>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.end}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger${open ? " open" : ""}`}
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.end}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </>
  );
}
