import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

const BRAND = "KrattyDEV";

export default function MainPage() {
  const brandRef = useRef(null);

  useEffect(() => {
    const el = brandRef.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (reduce.matches || !fine.matches) return;

    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.setProperty("--px", `${x * 8}px`);
        el.style.setProperty("--py", `${y * 5}px`);
      });
    };

    const onLeave = () => {
      el.style.setProperty("--px", "0px");
      el.style.setProperty("--py", "0px");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <section className="hero">
      <p className="hero-kicker fade-up">Tuna Enes Kızılırmak</p>
      <h1
        ref={brandRef}
        className="hero-brand fade-up fade-up-delay-1"
        aria-label={BRAND}
      >
        {BRAND.split("").map((char, i) => (
          <span
            key={`${char}-${i}`}
            className="hero-letter"
            style={{ animationDelay: `${0.12 + i * 0.04}s` }}
          >
            {char}
          </span>
        ))}
      </h1>
      <p className="hero-role fade-up fade-up-delay-2">
        Fullstack developer adayı · tasarım meraklısı
      </p>
      <p className="hero-proof fade-up fade-up-delay-2">
        Şu an OdakGIS&apos;te stajyer yazılım geliştirici
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
