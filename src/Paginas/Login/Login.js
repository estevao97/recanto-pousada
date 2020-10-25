import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  function login() {
    if (email === "pauloestevao92@gmail.com" && password === 123) {
      history.push("cadastro");
    }
  }

  return (
    <div className="base-login">
      <Form className="forms-login">
        <h1>Seja bem vindo</h1>
        <div className="dados">
          <Form.Group className="imputs" controlId="email">
            <Form.Control
              className="email"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="imputs" controlId="senha">
            <Form.Control
              className="senha"
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Link className="link-cadastro" to="cadastro">
            Não é cadastrado? Crie sua conta.
          </Link>
        </div>

        {Button && (
          <Button
            buttonStyle="btn--outline"
            onClick={() => {
              login();
            }}
          >
            Login
          </Button>
        )}
      </Form>
    </div>
  );
}
export default Login;
