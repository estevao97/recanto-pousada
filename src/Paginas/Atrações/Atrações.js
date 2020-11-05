import React from "react";
import "./Atrações.css";

function Atrações() {
  return (
    <div className="container-atracoes">
      <div className="testinho">
        A nossa pousada está repleta de atrações esperando vocês! <br></br>
        Venham conferir!
      </div>

      <div className="thumb">
        <div className="coluna1">
          <div className="cardatracao">
            <img
              className="imagem1"
              src="https://images.pexels.com/photos/2041759/pexels-photo-2041759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="aqui tem uma tirolesa"
            />
            <div className=" bungjump">
              Temos o bung jump<br></br> Uma ótima atração para quem gosta de
              adrenalina!<br></br> Valor por pessoa: R$30,00.
            </div>
          </div>

          <div className="cardatracao">
            <img
              className="imagem2"
              src="https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2018/09/oru-haven-tandem-kayak-2.jpg"
              alt="aqui tem um kaiak"
              
            />
            <div className= "texto2">
                djsfhjdfhjsf
            </div>
          </div>
          <div className="cardatracao">
            <img
              className="imagem3"
              src="https://images.pexels.com/photos/53012/glider-hang-glider-pilot-flying-53012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="aqui tem uma asa delta"
            />
            <div className= "texto3">
                djsfhjdfhjsf
            </div>
          </div>
        </div>
        <div className="coluna2">
          <div className="cardatracao">
            <img
              className="imagem4"
              src="https://images.pexels.com/photos/1143926/pexels-photo-1143926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="aqui tem uma imagem de pescaria"
            />
            <div className= "bungjump">
            Temos o bung jump<br></br> Uma ótima atração para quem gosta de
              adrenalina!<br></br> Valor por pessoa: R$30,00.
            </div>
          </div>

          <div className="cardatracao">
            <img
              className="imagem5"
              src="https://image.freepik.com/free-photo/young-attractive-woman-sitting-paddle-board_155003-13972.jpg"
              alt="aqui tem uma imagem de stand up peddle"
            />
            <div className= "texto5">
                djsfhjdfhjsf
            </div>
          </div>

          <div className="cardatracao">
            <img
              className="imagem6"
              src="https://images.pexels.com/photos/1364073/pexels-photo-1364073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="aqui tem uma imagem de stand up peddle"
            />
            <div className= "texto6">
                djsfhjdfhjsf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Atrações;
