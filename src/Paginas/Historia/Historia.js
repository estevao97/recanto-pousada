import React from "react";
import "./Historia.css";

function Historia() {
  return (
    <div className="base">
      <div className="title">História da Pousada</div>
      <div className="base-historia">
        <h1>Conheçam um pouco das nossas origens</h1>

        <h2>
          Inicialmente a pousada de minas era apenas uma fazenda, e acabou por
          abrigar refugiados,mineradores e escravos, foi construída em 1899 pelo
          Barão do Rio Novo José Augusto de Resende, que era um homem muito rico
          e influente na época, e por incrível que pareça, era uma pessoa muito
          boa e caridosa e sentia a vontade de ajudar o próximo. Ele sempre
          prezou por passar seus ensinamentos de vida, onde ele dizia que uma
          boa pessoa era aquela que ajuda quem estava ao seu redor. Ao longo dos
          anos seus descendentes sempre seguiam pelo caminho do Barão de Rio
          Novo, dessa forma em 1945 seu neto Augusto Resende ajudou muitos
          refugiados que fugiram da guerra. Com o intuito de criar um lugar que
          pudesse ser um refúgio para que as pessoas pudessem ficar tranquilas e
          seguras ele transformou sua fazenda em 1960 na Pousada Recanto de
          Minas.
        </h2>
      </div>
      <div className="teste">
        <img
          className="imagem1"
          src="https://images.pexels.com/photos/849384/pexels-photo-849384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940s"
          alt="Aqui uma foto da pousada"
        />
      </div>

      <div>
        <img
          className="imagem2"
          src="https://images.pexels.com/photos/3819390/pexels-photo-3819390.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Aqui uma foto da pousada"
        />
      </div>
    </div>
  );
}

export default Historia;
