import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/krattyy",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tunakizilirmak/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/tunakizilirmak/",
    icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/905426938003",
    icon: FaWhatsapp,
  },
];

export default function Contact() {
  return (
    <section className="contact-page fade-up">
      <header className="page-header">
        <p className="page-kicker">İletişim</p>
        <h1 className="page-title">Birlikte çalışalım</h1>
        <p className="page-lead">
          Projeler, staj veya iş birliği için aşağıdaki kanallardan
          ulaşabilirsiniz.
        </p>
      </header>

      <ul className="contact-list">
        {contacts.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              className="contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon aria-hidden="true" size={22} />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
