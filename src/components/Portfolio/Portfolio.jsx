import { Link } from "react-router-dom";
import "./portfolio.css";

const projects = [
  {
    title: "ArticQR: QR Generator",
    description:
      "Özelleştirilebilir QR kodlar, dinamik kodlar ve tarama analitikleri sunan Android uygulaması.",
    tags: ["Android", "QR", "Play Store"],
    to: "https://play.google.com/store/apps/details?id=com.articqr.app",
    external: true,
    cta: "Play Store’da aç",
  },
  {
    title: "QR Code Generator",
    description: "Metinden anında QR kod üreten React aracı.",
    tags: ["React", "qrcode.react"],
    to: "/portfolyo/qrgenerator",
    external: false,
    cta: "Canlı demo",
  },
  {
    title: "Hava Durumu Uygulaması",
    description:
      "OpenWeatherMap API ile şehir bazlı sıcaklık, nem ve rüzgar bilgisi.",
    tags: ["React", "API"],
    to: "/portfolyo/weatherapp",
    external: false,
    cta: "Canlı demo",
  },
  {
    title: "Frontend Spotify",
    description:
      "GreatStack rehberliğiyle yapılmış Spotify arayüz denemesi.",
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
          <li key={project.title} className="project-item">
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
      <div className="project-top">
        <h2>{project.title}</h2>
        <span className="project-cta">{project.cta} →</span>
      </div>
      <p>{project.description}</p>
      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </>
  );
}
