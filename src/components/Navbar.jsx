import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, personalInfo } from "../data/mock";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav
      id="main-navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: scrolled ? "blur(18px)" : "blur(6px)",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "blur(6px)",
        background: scrolled
          ? "rgba(0,0,0,0.72)"
          : "rgba(0,0,0,0.3)",
        borderBottom: scrolled
          ? "1px solid rgba(59,130,246,0.2)"
          : "1px solid transparent",
        transition: "all 0.35s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: 22,
              letterSpacing: -0.5,
              background: "linear-gradient(135deg, #60a5fa, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {"<HV />"}
          </span>
        </Link>

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            gap: 8,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="nav-desktop-links"
        >
          {navLinks.map((l) => {
            const active = pathname === l.path;
            return (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className={`nav-link${active ? " nav-link-active" : ""}`}
                  style={{
                    textDecoration: "none",
                    padding: "8px 18px",
                    borderRadius: 10,
                    fontSize: 14,
                    fontWeight: active ? 600 : 400,
                    color: active ? "#fff" : "rgba(255,255,255,0.65)",
                    background: active
                      ? "rgba(59,130,246,0.18)"
                      : "transparent",
                    border: active
                      ? "1px solid rgba(59,130,246,0.35)"
                      : "1px solid transparent",
                    transition: "all 0.25s ease",
                    display: "inline-block",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="nav-mobile-menu"
        style={{
          maxHeight: menuOpen ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          background: "rgba(0,0,0,0.92)",
          borderTop: menuOpen ? "1px solid rgba(59,130,246,0.2)" : "none",
        }}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: "12px 24px" }}>
          {navLinks.map((l) => {
            const active = pathname === l.path;
            return (
              <li key={l.path} style={{ marginBottom: 4 }}>
                <Link
                  to={l.path}
                  style={{
                    textDecoration: "none",
                    display: "block",
                    padding: "12px 16px",
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: active ? 600 : 400,
                    color: active ? "#fff" : "rgba(255,255,255,0.65)",
                    background: active ? "rgba(59,130,246,0.15)" : "transparent",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
