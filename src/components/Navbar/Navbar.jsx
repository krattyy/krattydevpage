import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link
          to="/"
          id="mainNav"
          className="cursor point"
          onClick={closeSidebar}
        >
          KrattyDEV
        </Link>

        {/* Desktop linklerinin olduğu kısım */}
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

        {/* Burger butonu BURADA olsun */}
        <button className="menu-button" onClick={toggleSidebar}>
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {isSidebarOpen && (
        <nav className="sidebar">
          <Link
            to="/"
            id="mainSide"
            className="cursor point"
            onClick={closeSidebar}
          >
            KrattyDEV
          </Link>

          <div className="sidebarLinks">
            <Link
              to="/hakkimda"
              id="hakkimdaSide"
              className="cursor point"
              onClick={closeSidebar}
            >
              Hakkımda
            </Link>

            <Link
              to="/portfolyo"
              id="yaptiklarimSide"
              className="cursor point"
              onClick={closeSidebar}
            >
              Portfolyo
            </Link>

            <Link
              to="/iletisim"
              id="iletisimSide"
              className="cursor point"
              onClick={closeSidebar}
            >
              İletişim
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
