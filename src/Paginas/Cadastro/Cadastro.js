import React, { Col } from "react";
import { Form } from "react-bootstrap";
import Button from "../../Components/Button/Button";
import "./Cadastro.css";

function Cadastro() {
  return (
    <div className="base-cadastro">
      <Form className="forms-cadastro">
        <h1>Registre-se</h1>

        <Form.Group className="imput-unico" as={Col} controlId="name">
          <Form.Control className="dados" type="name" placeholder="Nome" />
        </Form.Group>

        <Form.Row className="forms-linhas">
          <Form.Group className="imput-comp" as={Col} controlId="nacimento">
            <Form.Control className="dados" placeholder="Data de nascimento" />
          </Form.Group>

          <Form.Group className="imput-comp" as={Col} controlId="cpf">
            <Form.Control className="dados" placeholder="CPF" />
          </Form.Group>
        </Form.Row>

        <Form.Group className="imput-unico" as={Col} controlId="email">
          <Form.Control className="dados" type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="imput-unico" controlId="endereco">
          <Form.Control className="dados" placeholder="Endereço" />
        </Form.Group>

        <Form.Row className="forms-linhas">
          <Form.Group className="imput-comp" as={Col} controlId="city">
            <Form.Control className="dados" placeholder="Cidade" />
          </Form.Group>

          <Form.Group className="imput-comp" as={Col} controlId="gridState">
            <Form.Control
              className="dados"
              as="select"
              defaultValue=" "
              placeholder=""
            >
              <option>Minas Gerais</option>
              <option>...</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Group
          className="imput-unico"
          as={Col}
          controlId="formGridPassword"
        >
          <Form.Control
            className="dados"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        {Button && (
          <Button buttonStyle="btn--outline" onClick={() => {}}>
            Cadastre-se
          </Button>
        )}
      </Form>
    </div>
  );
}

export default Cadastro;
