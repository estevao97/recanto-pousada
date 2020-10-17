import React from "react";
import "../App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Carrossel } from "react-responsive-carousel";
import "./HeroSection.css";
import quarto1 from "../Images/quarto1.jpg";
import quarto2 from "../Images/quarto2.jpg";

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="fundo">
        <div className="Imagens">
          <Carrossel showArrows={true} autoPlay={true} infiniteLoop={true}>
            <div>
              <img src={quarto1} alt="Aqui tem um quarto" />
              <p className="legend">Legend 1</p>
            </div>

            <div>
              <img src={quarto2} alt="Aqui tem um quarto" />
              <p className="legend">Legend 1</p>
            </div>
          </Carrossel>
        </div>
      </div>
      <h1>Um lugar onde seu conforto é prioridade</h1>
      <p>&copy;Equipe6 </p>
    </div>
  );
}

export default HeroSection;
