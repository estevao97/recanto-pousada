import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import photos from "./Photos";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#f3cf7a",
  },
  gridList: {
    width: "90%",
    height: "50%",
    backgroundColor: "#6e3b3b",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    font: "normal 35pt Sansita Swashed",
    fontSize: "4vw",
    color: "#ffffff",
    textShadow: "rgba(0, 0, 0, 0.589) 2px 2px 2px",
    margin: "2%",
    width: "90%",
    height: "50%",
    flexGrow: "1",
  },
}));

function Fotos() {
  const classes = useStyles();
  const fotos = photos;

  return (
    <div className={classes.root}>
      <GridList cellHeight={400} spacing={40} className={classes.gridList}>
        <ListSubheader className={classes.title} component="div">
          Recanto de Minas
        </ListSubheader>

        {fotos.map((foto) => (
          <GridListTile key={foto.title}>
            <img src={foto.src} alt={foto.title} />
            <GridListTileBar
              title={foto.title}
              subtitle={<span>by: {foto.author}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
export default Fotos;
