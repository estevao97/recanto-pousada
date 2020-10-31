import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "../../Components/Button/Button";
import est from "./Estados";
import "./Cadastro.css";

const estados = { est };

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
      "&$cssFocused": {
        color: "#2b2b2b !important",
      },
    },
  },
})(TextField);

const styles = (theme) => ({
  multilineColor: {
    color: "red",
  },
});

function Cadastro() {
  const [estado, setEstado] = React.useState("BR");

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <div className="base-cadastro">
      <div className="forms-cadastro">
        <h1>Registre-se</h1>
        <div className="linhas-comp">
          <CssTextField
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            className="dados"
            label="Nome"
            variant="outlined"
            id="name"
          />
          <CssTextField
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            className="dados"
            label="CPF"
            variant="outlined"
            id="cpf"
          />
        </div>
        <div className="linhas-comp">
          <CssTextField
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            className="dados"
            label="Rua"
            variant="outlined"
            id="rua"
          />
          <CssTextField
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            className="numero"
            label="N°"
            variant="outlined"
            id="numero"
          />
        </div>
        <div className="linhas-comp">
          <CssTextField
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            className="dados"
            label="Cidade"
            variant="outlined"
            id="cidade"
          />

          <CssTextField
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            className="dados"
            label="Estado"
            variant="outlined"
            id="Estado"
            select
            value={estado}
            onChange={handleChange}
          >
            {estados.map((option) => (
              <MenuItem
                InputLabelProps={{
                  style: {
                    color: "white",
                  },
                }}
                className="menu"
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </CssTextField>
        </div>
        <div className="linha-unica">
          <CssTextField
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            className="dados"
            label="Email"
            variant="outlined"
            id="email"
          />
        </div>
        <div className="linha-unica">
          <CssTextField
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
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
