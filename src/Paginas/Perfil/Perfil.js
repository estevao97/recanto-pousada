import React from "react";
import "./Perfil.css";
import Footer from "../../Components/Footer/Footer";
import CardReserva from "../../Components/CardReserva/CardReserva";
import Usuario from "../../Components/Usuario/Usuario";

function Perfil() {
  return (
    <div>
      <div className="BasePerfil">
        <Usuario
          nome="Miguel Scatolin"
          cpf="123.456.789-10"
          cidade="VN cabuloso"
        />

        <div className="Grade">
          <CardReserva
            titulo="Quarto Casal"
            data="21/08/19"
            image="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?cs=srgb&dl=pexels-pixabay-279746.jpg&fm=jpg"
          />
          <CardReserva
            titulo="Quarto Solteiro"
            data="04/08/17"
            image="https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
          <CardReserva
            titulo="Quarto Família"
            data="12/03/18"
            image="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;
