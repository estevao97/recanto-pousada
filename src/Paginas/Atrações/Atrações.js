import React from "react";
import "./Atrações.css";

function Atrações() {
  return (
    <div className="container-atracoes">
      <div className="testinho">
         Atrações
        
      </div>

      <div className="thumb">
        <div className="coluna1">
          <div className="cardatracao">
            <h3>Tirolesa</h3>
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
            <h3>
              Kaiak
            </h3>
            <img

              className="imagem2"
              src="https://gooutside-static-cdn.akamaized.net/wp-content/uploads/sites/3/2018/09/oru-haven-tandem-kayak-2.jpg"
              alt="aqui tem um kaiak"
              
            />
            <div className= "texto2">
                O kaik é uma ótima atração para quem gosta de esportes e aventura!<br></br>
                Valor por pessoa: R$15,00.
            </div>
          </div>
          <div className="cardatracao">
            <h3>Asa Delta</h3>
            <img
              className="imagem3"
              src="https://images.pexels.com/photos/53012/glider-hang-glider-pilot-flying-53012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="aqui tem uma asa delta"
            />
            <div className= "texto3">
                A asa delta é uma ótima atração para quem quer se sentir nas alturas!<br>
                </br> Venha conferir esta novidade!! <br>
                </br> Valor por pessoa: R$100,00;
            </div>
          </div>
        </div>
        <div className="coluna2">
          <div className="cardatracao">
            <h3>Pescaria</h3>
            <img
              className="imagem4"
              src="https://images.pexels.com/photos/1143926/pexels-photo-1143926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="aqui tem uma imagem de pescaria"
            />
            <div className= "texto4">
              A pescaria é uma boa opção para quem gosta de ficar em paz e relaxar<br>
              </br>Valor por pessoa: Grátis,apenas paga pelo valor do pescado.
            </div>
          </div>

          <div className="cardatracao">
            <h3>Tirolesa </h3>
            <img
            
              className="imagem5"
              src="https://cdnstatic8.com/acrocabo.com.br/wp-content/uploads/2019/10/1_TIROLESA_Ion-David-4224.jpg"
              alt="Tirolesa"
            />
            <div className= "texto5">
             
             O misto de medo antes de pular e a liberdade de se sentir quase voando! Essa é a sensação que quem se <br></br>aventura em nossa tirolesa costuma contar.
                        <br></br> Valor por pessoa:R$15,00
            </div>
          </div>

          <div className="cardatracao">
            <h3>Passeio à Cavalo</h3>
            <img
              className="imagem6"
              src="https://images.pexels.com/photos/1364073/pexels-photo-1364073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="aqui tem uma imagem de stand up peddle"
            />
            <div className= "texto6">
                Temos nosso passeio a cavalo, todos costumam adorar!<br>
                </br>Venha conferir!<br></br>
                Valor por pessoa: Grátis!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Atrações;
