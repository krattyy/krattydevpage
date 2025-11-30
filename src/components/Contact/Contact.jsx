import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="icons">
        <i
          className="fa fa-instagram"
          onClick={() =>
            window.open("https://www.instagram.com/tunakizilirmak/", "_blank")
          }
        ></i>
        <i
          className="fa fa-github"
          onClick={() => window.open("https://github.com/krattyy", "_blank")}
        ></i>
        <i
          className="fa fa-linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/in/tunakizilirmak/", "_blank")
          }
        ></i>
        <i
          className="fa fa-whatsapp"
          onClick={() => window.open("https://wa.me/905426938003", "_blank")}
        ></i>
      </div>
    </>
  );
}

export default Contact;
