import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import MainPage from "./components/MainPage/MainPage";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import QRGenerator from "./components/Portfolio/things/qr/QRGenerator";
import Weather from "./components/Portfolio/things/weatherapp/Weather";
import Footer from "./components/Footer/Footer";
import CursorGlow from "./components/CursorGlow/CursorGlow";

const particles = Array.from({ length: 14 }, (_, i) => i);

function App() {
  return (
    <>
      <div className="app-atmosphere" aria-hidden="true">
        <div className="ambient-grid" />
        <span className="ambient-blob ambient-blob-a" />
        <span className="ambient-blob ambient-blob-b" />
        <span className="ambient-blob ambient-blob-c" />
        <div className="ambient-particles">
          {particles.map((i) => (
            <span key={i} className={`particle particle-${i}`} />
          ))}
        </div>
      </div>
      <CursorGlow />
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="hakkimda" element={<About />} />
            <Route path="portfolyo" element={<Portfolio />} />
            <Route path="portfolyo/qrgenerator" element={<QRGenerator />} />
            <Route path="portfolyo/weatherapp" element={<Weather />} />
            <Route path="iletisim" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
