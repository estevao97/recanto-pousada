import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "../../Components/Button/Button";
import "./Cadastro.css";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#6e3b3b",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#6e3b3b",
      },
      "&:hover fieldset": {
        borderColor: "#ffff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#6e3b3b",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    flexGrow: "1",
    margin: "2%",
  },
}));

function Cadastro() {
  const classes = useStyles();
  return (
    <div className="base-cadastro">
      <div className="forms-cadastro">
        <h1>Registre-se</h1>
        <div className="linhas-comp">
          <CssTextField
            className={classes.root}
            label="Nome"
            variant="outlined"
            id="name"
          />
          <CssTextField
            className={classes.root}
            label="CPF"
            variant="outlined"
            id="cpf"
          />
        </div>
        <div className="linhas-comp">
          <CssTextField
            className={classes.root}
            label="Rua"
            variant="outlined"
            id="rua"
          />
          <CssTextField
            className={classes.root}
            label="N°"
            variant="outlined"
            id="numero"
          />
        </div>
        <div className="linhas-comp">
          <CssTextField
            className={classes.root}
            label="Cidade"
            variant="outlined"
            id="cidade"
          />
          <CssTextField
            className={classes.root}
            label="Estado"
            variant="outlined"
            id="Estado"
          />
        </div>
        <div className="linha-unica">
          <CssTextField
            className={classes.root}
            label="Email"
            variant="outlined"
            id="email"
          />
        </div>
        <div className="linha-unica">
          <CssTextField
            className={classes.root}
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
