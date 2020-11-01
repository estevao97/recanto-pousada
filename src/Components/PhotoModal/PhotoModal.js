import React from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

function PhotoModal(foto, onClick) {
  return (
    <div
      onClick={() => {
        onClick(foto);
      }}
    >
      <GridListTile key={foto.title}>
        <img src={foto.src} alt={foto.title} />
        <GridListTileBar
          title={foto.title}
          subtitle={<span>by: {foto.author}</span>}
        />
      </GridListTile>
    </div>
  );
}

export default PhotoModal;
