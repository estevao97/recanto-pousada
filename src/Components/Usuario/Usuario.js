import React from "react";
import "./Usuario.css";

function Usuario(props) {
  return (
    <div className="cliente">
      <h1>{props.nome}</h1>
      <p> {props.cpf}</p>
      <p> {props.cidade}</p>
    </div>
  );
}

export default Usuario;
