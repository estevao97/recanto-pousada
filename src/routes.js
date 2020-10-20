import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.js";
import Cadastro from "./Paginas/Cadastro/Cadastro.js";
import Home from "./Paginas/Home/Home";
import Login from "./Paginas/Login";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
