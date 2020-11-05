import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Carrossel } from "react-responsive-carousel";
import "./Quarto.css";

function QuartoCasal() {
  return (
   
    <div className="quarto-casal">
      <h1>Quartos Casal</h1>
      <div className="fundo">
        <div className="Imagens">
          <Carrossel showArrows={true} autoPlay={true} infiniteLoop={true}>
            <div>
              <img
                src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?cs=srgb&dl=pexels-pixabay-279746.jpg&fm=jpg"
                alt="Aqui tem um quarto"
              />
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3965521/pexels-photo-3965521.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="Aqui tem um banheiro"
              />
            </div>
          </Carrossel>
        </div>
      </div>

      <div className="descricao">
        <h2>Quarto Casal</h2>
      </div>
      <p>
        <br />
        Descrição dos quartos de casal
      </p>
      <p>&copy;Equipe6 </p>
      </div>
  )
}
export default QuartoCasal;
