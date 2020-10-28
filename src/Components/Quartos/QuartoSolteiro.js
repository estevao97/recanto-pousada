import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Carrossel } from "react-responsive-carousel";
import "./Quarto.css";

function QuartoSolteiro() {
  return (

      <div className="quarto-solteiro">
      <h1>Quartos Solteiro</h1>
      <div className="fundo">
        <div className="Imagens">
          <Carrossel showArrows={true} autoPlay={true} infiniteLoop={true}>
            <div>
              <img
                src="https://www.pexels.com/pt-br/foto/abajur-aconchego-apartamento-assento-2029722/"
                alt="Aqui tem um quarto"
              />
            </div>
            <div>
              <img
                src="https://www.pexels.com/pt-br/foto/madeira-hotel-casa-lar-3620234/"
                alt="Aqui tem um banheiro"
              />
            </div>
          </Carrossel>
        </div>
      </div>

       <div className="descricao">
        <h2>Quarto Solteiro</h2>
      </div>
      <p>
        <br />
        Descrição dos quartos de solteiro
      </p>
      <p>&copy;Equipe6 </p>
      </div>
      )
}
export default QuartoSolteiro;
