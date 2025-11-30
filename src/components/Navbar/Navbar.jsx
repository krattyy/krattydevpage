import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link
          to="/"
          smooth={true}
          duration={500}
          id="mainNav"
          className="cursor point"
        >
          KrattyDEV
        </Link>

        <div className="sagicin">
          <Link
            to="/hakkimda"
            smooth={true}
            duration={500}
            id="hakkimda"
            className="cursor point"
          >
            Hakkımda
          </Link>

          <Link
            to="/portfolyo"
            smooth={true}
            duration={500}
            id="yaptiklarim"
            className="cursor point"
          >
            Portfolyo
          </Link>

          <Link
            to="/iletisim"
            smooth={true}
            duration={500}
            id="iletisim"
            className="cursor point"
          >
            İletişim
          </Link>
        </div>
      </nav>
    </>
  );
}
