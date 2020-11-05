import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Quarto from "./Components/Quartos/Quarto";
import Cadastro from "./Paginas/Cadastro/Cadastro.js";
import Home from "./Paginas/Home/Home";
import Fotos from "./Paginas/Fotos/Fotos";
import Login from "./Paginas/Login";
import Perfil from "./Paginas/Perfil/Perfil";
import Atrações from "./Paginas/Atrações/Atrações";
import Historia from "./Paginas/Historia/Historia";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/perfil" exact component={Perfil} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/fotos" exact component={Fotos} />
        <Route path="/quartos" exact component={Quarto} />
        <Route path="/atracoes" exact component={Atrações} />
        <Route path="/historia" exact component={Historia} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
