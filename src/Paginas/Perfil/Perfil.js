import React from "react";
import "./Perfil.css";
import imgPerfil from "../../images/perfil.svg";

function Perfil() {
  return (
    <div>
      <div className="Dados">
        <div className="foto">
          <h1>Bryan Azevedo</h1>
          <img className="imagem" src={imgPerfil} alt="" />
        </div>
      </div>
      <div className="Reservas">Quarto de casal alugado em: 02/03/2019</div>
      <div className="Base"></div>
    </div>
  );
}

export default Perfil;
