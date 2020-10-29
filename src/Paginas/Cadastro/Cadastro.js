import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "../../Components/Button/Button";
import "./Cadastro.css";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#f3cf7a",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#f3cf7a",
      },
      "&:hover fieldset": {
        borderColor: "#ffff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f3cf7a",
      },
    },
  },
})(TextField);

function Cadastro() {
  return (
    <div className="base-cadastro">
      <div className="forms-cadastro">
        <h1>Registre-se</h1>
        <div className="linhas-comp">
          <CssTextField
            className="dados"
            label="Nome"
            variant="outlined"
            id="name"
          />
          <CssTextField
            className="dados"
            label="CPF"
            variant="outlined"
            id="cpf"
          />
        </div>
        <div className="linhas-comp">
          <CssTextField
            className="dados"
            label="Rua"
            variant="outlined"
            id="rua"
          />
          <CssTextField
            className="dados"
            label="N°"
            variant="outlined"
            id="numero"
          />
        </div>
        <div className="linhas-comp">
          <CssTextField
            className="dados"
            label="Cidade"
            variant="outlined"
            id="cidade"
          />
          <CssTextField
            className="dados"
            label="Estado"
            variant="outlined"
            id="Estado"
          />
        </div>
        <div className="linha-unica">
          <CssTextField
            className="dados"
            label="Email"
            variant="outlined"
            id="email"
          />
        </div>
        <div className="linha-unica">
          <CssTextField
            className="dados"
            type="password"
            label="Senha"
            variant="outlined"
            id="senha"
          />
        </div>
        <div className="linha-unica">
          {Button && (
            <Button className="btn-teste" buttonStyle="btn--outline">
              CONCLUIR REGISTRO
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
