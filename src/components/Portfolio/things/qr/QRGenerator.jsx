import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import "./QRGenerator.css";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");
  const [pulse, setPulse] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const previewRef = useRef(null);

  const createQr = () => {
    const value = text.trim();
    if (!value) return;
    setQr(value);
    setPulse(true);
    setDownloaded(false);
    window.setTimeout(() => setPulse(false), 500);
  };

  const downloadPng = () => {
    const svg = previewRef.current?.querySelector("svg");
    if (!svg || !qr) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const blob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const img = new Image();

    img.onload = () => {
      const size = 512;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);

      const link = document.createElement("a");
      link.download = "qrcode.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
      setDownloaded(true);
      window.setTimeout(() => setDownloaded(false), 1800);
    };

    img.onerror = () => URL.revokeObjectURL(url);
    img.src = url;
  };

  return (
    <section className="demo-page fade-up">
      <Link to="/portfolyo" className="demo-back">
        ← Portfolyoya dön
      </Link>
      <h1 className="demo-title">QR Code Generator</h1>
      <p className="demo-lead">
        Neden: Paylaşılabilir QR’ı tarayıcıda hızlı üretmek ve React state /
        SVG export akışını pratik etmek için yaptım.
      </p>

      <div className="qr-panel">
        <div
          className={pulse ? "qr-preview pulse" : "qr-preview"}
          ref={previewRef}
        >
          {qr ? (
            <QRCodeSVG
              value={qr}
              size={200}
              bgColor="#ffffff"
              fgColor="#141210"
            />
          ) : (
            <p className="qr-placeholder">QR burada görünecek</p>
          )}
        </div>

        <div className="qr-form">
          <label htmlFor="qr-input">Bağlantı veya metin</label>
          <input
            id="qr-input"
            type="text"
            placeholder="https://ornek.com"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") createQr();
            }}
          />
          <div className="qr-actions">
            <button type="button" onClick={createQr}>
              Oluştur
            </button>
            <button
              type="button"
              className="btn-secondary"
              disabled={!qr}
              onClick={downloadPng}
            >
              İndir (PNG)
            </button>
          </div>
          {downloaded && (
            <p className="demo-success" role="status">
              PNG indirildi
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
