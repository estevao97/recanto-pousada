import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "../../Components/Button/Button";
import est from "./Estados.js";
import "./Cadastro.css";
import Footer from "../../Components/Footer/Footer";
import alertify from "alertifyjs";
import api from "../../services/api";

const _estados = est;

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

function Cadastro() {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleRegister() {
    const data = { name, cpf, rua, numero, cidade, estado, email, senha };

    try {
      const response = await api.post("cadastro", data);
      alert(
        `Yeah! Você foi cadastrado com sucesso, seja bem vindo ao nosso recanto! 
Aqui está o seu ID de acesso: ${response.data.id}`,
        function () {}
      );
    } catch (err) {
      alertify.error("Teve um erro no cadastro, tente novamente.");
    }
  }

  const handleChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <div>
      <div className="base-cadastro">
        <form className="forms-cadastro">
          <h1>Registre-se</h1>
          <div className="linhas-comp">
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
              className="dados"
              label="Nome"
              variant="outlined"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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
              className="dados"
              label="CPF"
              variant="outlined"
              id="cpf"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>
          <div className="linhas-comp">
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
              className="dados"
              label="Rua"
              variant="outlined"
              id="rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
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
              className="numero"
              label="N°"
              variant="outlined"
              id="numero"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
          <div className="linhas-comp">
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
              className="dados"
              label="Cidade"
              variant="outlined"
              id="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />

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
              className="dados"
              label="Estado"
              variant="outlined"
              id="Estado"
              select
              value={estado}
              onChange={handleChange}
            >
              {_estados.map((option) => (
                <MenuItem
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
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              className="dados"
              label="Email"
              variant="outlined"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="linha-unica">
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
              className="dados"
              type="password"
              label="Senha"
              variant="outlined"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="linha-unica">
            {Button && (
              <Button
                className="btn-teste"
                buttonStyle="btn--outline"
                type="submit"
                onClick={handleRegister}
              >
                REGISTRAR
              </Button>
            )}
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Cadastro;
