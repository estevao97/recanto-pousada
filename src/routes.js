import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Quarto from "./Components/Quartos/Quarto";
import Cadastro from "./Paginas/Cadastro/Cadastro.js";
import Home from "./Paginas/Home/Home";
import Fotos from "./Paginas/Fotos/Fotos";
import Login from "./Paginas/Login";
import Perfil from "./Paginas/Perfil/Perfil";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/perfil" exact component={Perfil} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/fotos" exact component={Fotos} />
        <Route path="/" exact component={Home} />
        <Route path="/quartos" exact component={Quarto} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
