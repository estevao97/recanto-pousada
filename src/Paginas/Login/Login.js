import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import api from "../../services/api";
import "./Login.css";

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

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const history = useHistory();

  async function handleLogin(e) {
    try {
      const response = await api.post("login", { email, senha });
      localStorage.setItem("nameUser", response.data.name);

      alert("Você conseguiu!:)");
      history.push("/perfil");
    } catch (err) {
      alert("Falha no login.Tente novamente.Você consegue!:)");
    }
  }

  return (
    <div>
      <div className="base-login">
        <div className="forms-login">
          <h1>Seja bem vindo</h1>
          <div className="linha">
            <CssTextField
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              type="email"
              className="email"
              label="Email"
              variant="outlined"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="linha">
            <CssTextField
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              type="password"
              className="senha"
              label="Senha"
              variant="outlined"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <Link className="link-cadastro" to="cadastro">
            Não é cadastrado? Crie sua conta.
          </Link>
          <div className="btn-login">
            {Button && (
              <Button buttonStyle="btn--outline" onClick={handleLogin}>
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;
