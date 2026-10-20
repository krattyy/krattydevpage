import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} KrattyDEV · Tuna Enes Kızılırmak
      </p>
    </footer>
  );
}
