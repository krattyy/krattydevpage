import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="all">
      <p id="portfolyo">Projelerim</p>
      <div className="portfolioContainer">
        <div className="qrGenerator">
          <Link
            to="/portfolyo/qrgenerator"
            id="qrgenerator"
            className="cursor-pointer"
          >
            QR Code Generator
          </Link>
          <p>React ile yapılmış bir QR kod oluşturucu.</p>
        </div>

        <div className="weatherApp">
          <Link
            to="/portfolyo/weatherapp"
            id="weatherapp"
            className="cursor-pointer"
          >
            Hava Durumu Uygulaması
          </Link>
          <p>API kullanarak hava durumu bilgilerini gösteren uygulama.</p>
        </div>

        <div className="spotifyClone">
          <h3>Frontend Spotify</h3>
          <p>Spotify ana sayfasını Frontend ile kopyalamak </p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
