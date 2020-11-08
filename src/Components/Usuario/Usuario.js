import React from "react";
import "./Usuario.css";

function Usuario(props) {
  return (
    <div className="capa">
      <div className="cliente">
        <h1>Ei {props.nome}!</h1>
        <h2>Reveja seus ótimos momentos com a gente</h2>
      </div>
    </div>
  );
}

export default Usuario;
