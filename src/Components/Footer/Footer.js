import React from "react";
import Logo from "../../images/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="rodape">
      <img
        className="Logo-footer
      "
        src={Logo}
        alt="Logo"
      />
      <div className="contatos">
        <h3>Email: recantodeminas@gmail.com</h3>
        <h3>Telefone: (31) 3141-5926</h3>
      </div>
      <div className="redes">
        <h3>Facebook: recantodeminas@gmail.com</h3>
        <h3>Instagram: @recdeminas</h3>
      </div>
    </footer>
  );
}

export default Footer;
