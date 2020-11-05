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
              src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="Aqui tem um quarto"
            />
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/2134224/pexels-photo-2134224.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
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
