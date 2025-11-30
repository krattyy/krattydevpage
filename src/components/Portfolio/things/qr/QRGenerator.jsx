import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./QRGenerator.css";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  return (
    <div className="qr-code-generator">
      <h2>QR Code Generator</h2>
      <QRCodeSVG value={qr} size={200} />
      <p>QR kod için bir bağlantı gir:</p>
      <input
        type="text"
        placeholder="https://ornek.com"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setQr(text)}>Oluştur</button>
    </div>
  );
}
