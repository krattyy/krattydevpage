import React, { useEffect, useState } from "react";
import "./Loading.css";
import useCountDown from "../CountDown/CountDown";

const Loading = () => {
  const { secondsLeft, start } = useCountDown();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    start(3);
  }, []);

  useEffect(() => {
    if (secondsLeft === 0) {
      setVisible(false);
    }
  }, [secondsLeft]);

  if (!visible) return null;

  return (
    <div className="loadingContainer">
      <h1 className="text" data-text="Kişisel Web Siteme Hoş Geldiniz">
        Kişisel Web Siteme Hoş Geldiniz
      </h1>

      <div className="rain"></div>

      <h2 className="text" data-text={`Geri Sayım: ${secondsLeft}`}>
        Geri Sayım: {secondsLeft}
      </h2>
    </div>
  );
};

export default Loading;
