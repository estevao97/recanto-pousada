import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Perfil.css";
import Footer from "../../Components/Footer/Footer";
import CardReserva from "../../Components/CardReserva/CardReserva";
import Usuario from "../../Components/Usuario/Usuario";

function Perfil() {
  const nameUser = localStorage.getItem("nameUser");
  return (
    <div>
      <div className="BasePerfil">
        <div className="user">
          <Usuario nome={nameUser} />
        </div>

        <div className="Grade">
          <Link to="/quartos" className="grid-links">
            <CardReserva
              titulo="Quarto Casal"
              data="21/08/19"
              image="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?cs=srgb&dl=pexels-pixabay-279746.jpg&fm=jpg"
            />
          </Link>
          <Link to="/quartos" className="grid-links">
            <CardReserva
              titulo="Quarto Solteiro"
              data="04/08/17"
              image="https://images.pexels.com/photos/2029722/pexels-photo-2029722.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            />
          </Link>

          <Link to="/quartos" className="grid-links">
            <CardReserva
              titulo="Quarto Família"
              data="12/03/18"
              image="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            />
          </Link>

          <Link to="/quartos" className="grid-links">
            <CardReserva
              titulo="Quarto Casal"
              data="22/12/19"
              image="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?cs=srgb&dl=pexels-pixabay-279746.jpg&fm=jpg"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;
