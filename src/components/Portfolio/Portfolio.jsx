import { Link } from "react-router-dom";
import "./portfolio.css";

const projects = [
  {
    title: "ArticQR: QR Generator",
    problem: "Markalar QR’ı hızlı üretip tarama verisini takip etmek istiyor.",
    solution:
      "Özelleştirilebilir tasarım, dinamik kodlar ve analitik sunan ArticQR’ın Android uygulamasını geliştirdim; Play Store’da yayında.",
    tags: ["Android", "QR", "Play Store"],
    to: "https://play.google.com/store/apps/details?id=com.articqr.app",
    external: true,
    cta: "Play Store’da aç",
    featured: true,
  },
  {
    title: "QR Code Generator",
    problem: "Tarayıcıda hızlıca paylaşılabilir QR üretmek gerekiyordu.",
    solution:
      "React ile metinden anında QR üreten, PNG indirebilen hafif bir araç yaptım.",
    tags: ["React", "qrcode.react"],
    to: "/portfolyo/qrgenerator",
    external: false,
    cta: "Canlı demo",
  },
  {
    title: "Hava Durumu Uygulaması",
    problem: "Harici API verisini temiz bir arayüzde göstermek istedim.",
    solution:
      "OpenWeatherMap ile şehir bazlı sıcaklık, nem ve rüzgar bilgisini React’te sunuyorum.",
    tags: ["React", "API"],
    to: "/portfolyo/weatherapp",
    external: false,
    cta: "Canlı demo",
  },
  {
    title: "Frontend Spotify",
    problem: "Müzik uygulaması UI kalıplarını pratik etmek istedim.",
    solution:
      "GreatStack rehberliğiyle Spotify’a benzeyen bir arayüz denemesi kurdum.",
    tags: ["React", "UI"],
    to: "https://github.com/krattyy/spotify-clone",
    external: true,
    cta: "GitHub’da aç",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-page fade-up">
      <header className="page-header">
        <p className="page-kicker">Portfolyo</p>
        <h1 className="page-title">Seçili projeler</h1>
        <p className="page-lead">
          Öğrenirken ve deneme yaparken ürettiğim uygulamalar.
        </p>
      </header>

      <ul className="project-list">
        {projects.map((project) => (
          <li
            key={project.title}
            className={
              project.featured ? "project-item featured" : "project-item"
            }
          >
            {project.external ? (
              <a
                href={project.to}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ProjectBody project={project} />
              </a>
            ) : (
              <Link to={project.to} className="project-link">
                <ProjectBody project={project} />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectBody({ project }) {
  return (
    <>
      {project.featured && <span className="featured-badge">Öne çıkan</span>}
      <div className="project-top">
        <h2>{project.title}</h2>
        <span className="project-cta">{project.cta} →</span>
      </div>
      <p className="project-problem">
        <span>Problem</span> {project.problem}
      </p>
      <p className="project-solution">
        <span>Ne yaptım</span> {project.solution}
      </p>
      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </>
  );
}
