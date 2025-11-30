import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <>
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

        <div className="calculator">
          <h3>Hesap Makinesi</h3>
          <p>Temel aritmetik işlemlerini yapabilen bir hesap makinesi.</p>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
