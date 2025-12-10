import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" id="mainNav" className="cursor point">
          KrattyDEV
        </Link>

        <div className="sagicin">
          <Link to="/hakkimda" id="hakkimda" className="cursor point">
            Hakkımda
          </Link>
          <Link to="/portfolyo" id="yaptiklarim" className="cursor point">
            Portfolyo
          </Link>
          <Link to="/iletisim" id="iletisim" className="cursor point">
            İletişim
          </Link>
        </div>

        <div className="burger" onClick={toggleSidebar}>
          {sidebarOpen ? (
            <FiX size={30} color="white" />
          ) : (
            <GiHamburgerMenu size={30} color="white" />
          )}
        </div>
      </nav>

      <div className={sidebarOpen ? "sidebar active" : "sidebar"}>
        <Link to="/hakkimda" onClick={toggleSidebar} className="sidebar-link">
          Hakkımda
        </Link>
        <Link to="/portfolyo" onClick={toggleSidebar} className="sidebar-link">
          Portfolyo
        </Link>
        <Link to="/iletisim" onClick={toggleSidebar} className="sidebar-link">
          İletişim
        </Link>
      </div>
    </div>
  );
}
