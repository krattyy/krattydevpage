import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import MainPage from "./components/MainPage/MainPage";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import Video from "./components/backgroundvideo/video";
import QRGenerator from "./components/Portfolio/things/qr/QRGenerator";
import Weather from "./components/Portfolio/things/weatherapp/Weather";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Video />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="hakkimda" element={<About />} />
        <Route path="portfolyo" element={<Portfolio />} />
        <Route path="portfolyo/qrgenerator" element={<QRGenerator />} />
        <Route path="portfolyo/weatherapp" element={<Weather />} />
        <Route path="iletisim" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
