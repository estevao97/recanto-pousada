import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Carrossel } from "react-responsive-carousel";
import "./Quarto.css";

function QuartoSolteiro() {
  return (

      <div className="quarto-solteiro">
      <h1>Quarto Solteiro</h1>
      <div className="fundo">
         <div className="descrição"><br/>O democrata Joe Biden prometeu, neste sábado (7), ser "o presidente para todos os americanos", depois que as redes dos EUA projetaram sua vitória contra o republicano Donald Trump.

"O trabalho que temos pela frente será difícil, mas eu prometo a vocês: serei um presidente para todos os americanos, quer tenha votado em mim ou não", disse o ex-vice-presidente de 77 anos no Twitter.

"Com o fim da campanha, é hora de deixar para trás a raiva e a retórica dura e nos unirmos como uma nação", declarou em outra declaração.

"É hora da América se unir. E se curar".<br/></div>
        <div className="Imagens">
          <Carrossel showArrows={true} autoPlay={true} infiniteLoop={true}>
            <div>
              <img
                src="https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="Aqui tem um quarto"
              />
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3620234/pexels-photo-3620234.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="Aqui tem um banheiro"
              />
            </div>
          </Carrossel>
        </div>
      </div>

      </div>
      )
}
export default QuartoSolteiro;
