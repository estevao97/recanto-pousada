import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button.js";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Recanto de Minas
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/historia"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                História da Pousada
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/quartos"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Quartos
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/atracoes"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Atrações
              </Link>
            </li>

            <li>
              <Link
                to="/cadastro"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Alugue um quarto
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">RESERVE AGORA</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
