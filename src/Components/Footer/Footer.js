import React from "react";
import Logo from "../../images/logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";
import { white } from "material-ui/styles/colors";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="rodape">
        <img
          className="Logo-footer
      "
          src={Logo}
          alt="Logo"
        />
        <div className="contatos">
          <div className="icon">
            <FaWhatsapp style={{ fontSize: 35, color: white, margin: 10 }} />
            <h3>(31) 9159-2653</h3>
          </div>
          <div className="icon">
            <MdEmail style={{ fontSize: 35, color: white, margin: 10 }} />
            <h3>recantodeminas@gmail.com</h3>
          </div>
        </div>
        <div className="redes">
          <div className="icon">
            <FaFacebook style={{ fontSize: 35, color: white, margin: 10 }} />
            <h3> Recanto de Minas</h3>
          </div>
          <div className="icon">
            <FaInstagram style={{ fontSize: 35, color: white, margin: 10 }} />
            <h3>@recantodeminas</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
