import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as Carrossel } from "react-responsive-carousel";
import Button from "./BotãoQuarto.js";
import "./Quarto.css";

function QuartoSolteiro() {
  return (
    <div className="quarto-solteiro">
      <h1>Quarto Solteiro</h1>
      <div className="fundo-quartos">
        <div className="Imagens-quartos">
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
        <div className="descricao-quartos">
          <br />
          <p>
            Nossos quartos de solteiro apresentam o melhor conforto e as
            melhores instalações que você e seus amigos merecem. Venha já passar
            maravilhosos momentos no Recanto da Pousada.
            <h2>Apenas R$100 por dia!</h2>
          </p>
          <br />
          <div className="btn-quarto">
            {
              <Button variant="contained" color="primary" disableElevation>
                Reservar!
              </Button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuartoSolteiro;
