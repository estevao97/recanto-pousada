import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "../../Components/Button/Button";
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
  const [password, setPassword] = useState();
  const history = useHistory();

  function login() {
    if (email === "pauloestevao92@gmail.com" && password === 123) {
      history.push("cadastro");
    }
  }

  return (
    <div className="base-login">
      <div className="forms-login">
        <h1>Seja bem vindo</h1>
        <div className="linha">
          <CssTextField
            type="email"
            className="email"
            label="Email"
            variant="outlined"
            id="email"
            onClick={login()}
          />
        </div>
        <div className="linha">
          <CssTextField
            type="password"
            className="senha"
            label="Senha"
            variant="outlined"
            id="senha"
            onClick={login()}
          />
        </div>
        <Link className="link-cadastro" to="cadastro">
          Não é cadastrado? Crie sua conta.
        </Link>
        <div className="btn-login">
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
        </div>
      </div>
    </div>
  );
}
export default Login;
