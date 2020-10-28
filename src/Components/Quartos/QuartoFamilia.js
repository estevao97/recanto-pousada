import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Carrossel } from "react-responsive-carousel";
import "./Quarto.css";

function QuartoFamilia() {
  return (

    <div className="quarto-familia">
    <h1>Quarto Família</h1>
    <div className="fundo">
      <div className="Imagens">
        <Carrossel showArrows={true} autoPlay={true} infiniteLoop={true}>
          <div>
            <img
              src="https://www.pexels.com/pt-br/foto/cama-candelabro-comodo-dentro-de-casa-262048/"
              alt="Aqui tem um quarto"
            />
          </div>

          <div>
            <img
              src="https://www.pexels.com/pt-br/foto/projeto-arquitetonico-design-arquitetonico-arquitetura-castanho-4099299/"
              alt="Área de convivência"
            />
          </div>

          <div>
            <img
              src="https://www.pexels.com/pt-br/foto/afundar-apartamento-banheira-banheiro-2134224/"
              alt="Aqui tem um banheiro"
            />
          </div>
        </Carrossel>
      </div>
    </div>

  <div className="descricao">
      <h2>Quarto Família</h2>
    </div>
    <p>
      <br />
      Venha com sua família aproveitar o melhor do nosso mais luxuoso quarto. Com uma confortável
      área de convivência, viva seus melhores momentos por apenas R$ x.
    </p>
    <p>&copy;Equipe6 </p>
  </div>
  )
}
export default QuartoFamilia;
