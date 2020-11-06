/*
Colocar título
Colocar as imagens
Colocar texto
Colocar preço
Botões redirecionando para o cadastro
Hero section de base
*/

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Quarto.css";
import QuartoCasal from "./QuartoCasal";
import QuartoFamilia from "./QuartoFamilia";
import QuartoSolteiro from "./QuartoSolteiro";
import Footer from "../../Components/Footer/Footer";

function Quarto() {
  return (
    <>
      <QuartoCasal />
      <QuartoSolteiro />
      <QuartoFamilia />
      <Footer />
    </>
  );
}

export default Quarto;
