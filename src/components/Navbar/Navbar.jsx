import { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  { to: "/hakkimda", label: "Hakkımda" },
  { to: "/portfolyo", label: "Portfolyo" },
  { to: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"}>
      <nav className="navbar" aria-label="Ana navigasyon">
        <Link to="/" className="nav-brand">
          KrattyDEV
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="burger"
          aria-label={sidebarOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen((open) => !open)}
        >
          {sidebarOpen ? <FiX size={26} /> : <GiHamburgerMenu size={26} />}
        </button>
      </nav>

      <div
        className={sidebarOpen ? "sidebar active" : "sidebar"}
        aria-hidden={!sidebarOpen}
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
            onClick={() => setSidebarOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {sidebarOpen && (
        <button
          type="button"
          className="sidebar-backdrop"
          aria-label="Menüyü kapat"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </header>
  );
}
