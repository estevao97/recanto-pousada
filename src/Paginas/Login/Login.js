import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  return (
    <div className="base">
      <div className="container">
        <h1>Recanto de Minas</h1>
        <Form>
          <div className="imputs">
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">
                Entre com seu email de cadastro
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            <Button variant="Login">Primary</Button>
            {}
          </div>
        </Form>
      </div>
    </div>
  );
}
export default Login;
