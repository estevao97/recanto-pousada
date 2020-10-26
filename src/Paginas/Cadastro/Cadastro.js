import React from "react";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "../../Components/Button/Button";
import "./Cadastro.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f3cf7a",
      backgroundcolor: "#ffff",
    },
    secondary: {
      main: "#6e3b3b",
    },
  },
  textField: {
    color: "#6e3b3b",
  },
});

function Cadastro() {
  return (
    <div className="base-cadastro">
      <ThemeProvider theme={theme}>
        <div className="forms-cadastro">
          <h1>Registre-se</h1>
          <div className="linhas-comp" theme={theme}>
            <TextField
              id="name"
              label="Nome"
              style={{ margin: 15 }}
              placeholder="Nome"
              InputProps="#6e3b3b"
              fullWidth
              margin="normal"
              variant="outlined"
              color="primary"
            />
            <TextField
              id="cpf"
              label="CPF"
              style={{ margin: 15 }}
              placeholder="CPF"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="linha-unica">
            <TextField
              id="cidade"
              label="Cidade"
              style={{ margin: 15 }}
              placeholder="Cidade"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="linha-unica">
            <TextField
              id="endereco"
              label="Endereço"
              style={{ margin: 15 }}
              placeholder="Endereço"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="linha-unica">
            <TextField
              id="email"
              label="Email"
              style={{ margin: 15 }}
              placeholder="Email"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="linha-unica">
            <TextField
              id="senha"
              label="Senha"
              style={{ margin: 15 }}
              placeholder="Senha"
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className="linha-unica">
            {Button && (
              <Button buttonStyle="btn--outline">CONCLUIR REGISTRO</Button>
            )}
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Cadastro;
