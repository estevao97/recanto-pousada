import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 2,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
});

export default function CardReserva(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Quarto reservado"
          height="140"
          image={props.image}
          title="Quarto reservado"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Reservado em: {props.data}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
