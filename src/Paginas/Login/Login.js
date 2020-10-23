import React from "react";
import { Form } from "react-bootstrap";
import "./Login.css";
import "../../Components/HeroSection/HeroSection.css";
import "../../Components/Navbar/Navbar.css";
import { Button } from "../../Components/Button/Button.js";

function Login() {
  return (
    <div className="Secao">
      <div className="base">
        <div className="container">
          <h1>Recanto de Minas</h1>
          <Form>
            <div className="imputs">
              <Form.Group controlId="email">
                <p>Faça seu login</p>

                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group controlId="senha">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>
              <div className="Botao">
                <Button buttonStyle="btn--outline">Login</Button>
              </div>
              {}
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Login;
