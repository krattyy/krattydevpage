import { Link } from "react-router-dom";
import "./MainPage.css";

export default function MainPage() {
  return (
    <section className="hero">
      <p className="hero-kicker fade-up">Tuna Enes Kızılırmak</p>
      <h1 className="hero-brand fade-up fade-up-delay-1">KrattyDEV</h1>
      <p className="hero-role fade-up fade-up-delay-2">
        Fullstack developer adayı · tasarım meraklısı
      </p>
      <p className="hero-lead fade-up fade-up-delay-3">
        Projelerimi, yolculuğumu ve iletişim bilgilerimi burada bulabilirsiniz.
      </p>
      <div className="hero-actions fade-up fade-up-delay-4">
        <Link to="/portfolyo" className="btn btn-primary">
          Portfolyoya bak
        </Link>
        <Link to="/iletisim" className="btn btn-ghost">
          İletişime geç
        </Link>
      </div>
    </section>
  );
}
