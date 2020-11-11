import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Carrossel } from "react-responsive-carousel";
import Button from "../../Components/Button/Button";
import "./Quarto.css";

function QuartoFamilia() {
  return (

    <div className="quarto-familia">
    <h1>Quarto Família</h1>
    <div className="fundo-quartos">
      
      <div className="Imagens-quartos">
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
       <div className="descricao-quartos"><br/><p>Traga já sua família para aproveitar o melhor que uma pousada pode oferecer. Nossos quartos família são amplos, confortáveis, e uma excelente opcão para uma 
       estadia de qualidade na melhor pousada de Minas Gerais. Apenas R$150 por dia</p><br/>
       <div className="btn-quarto">
            {Button && (
              <Button
              >
                Reserve agora!
              </Button>
            )}
          </div>
       </div>
    </div>
    
  </div>
  
  )
}
export default QuartoFamilia;
