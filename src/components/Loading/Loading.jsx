import React from "react";
import "./Loading.css";
import { useState } from "react";

const Loading = () => {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;
  return (
    <div className="loadingContainer">
      <div className="text"></div>
      <div className="rain"></div>
      <button className="devamButton" onClick={() => setVisible(false)}>
        Devam Etmek İçin Butona Tıklayabilirsiniz.
      </button>
    </div>
  );
};

export default Loading;
