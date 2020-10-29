import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "85%",
    height: "100%",
    background: "#6e3b3b",
    justifyContent: "space-around",
    padding: "3%",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className="base-fotos">
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          <GridListTile cols={2 || 3}>
            <img src="https://images.pexels.com/photos/2662183/pexels-photo-2662183.jpeg?cs=srgb&dl=pexels-josh-hild-2662183.jpg&fm=jpg" />
          </GridListTile>
          <GridListTile cols={1 || 3}>
            <img src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?cs=srgb&dl=pexels-pixabay-279746.jpg&fm=jpg" />
          </GridListTile>
          <GridListTile cols={1 || 1}>
            <img src="https://images.pexels.com/photos/2662183/pexels-photo-2662183.jpeg?cs=srgb&dl=pexels-josh-hild-2662183.jpg&fm=jpg" />
          </GridListTile>
          <GridListTile cols={1 || 1}>
            <img src="https://images.pexels.com/photos/2662183/pexels-photo-2662183.jpeg?cs=srgb&dl=pexels-josh-hild-2662183.jpg&fm=jpg" />
          </GridListTile>
          <GridListTile cols={1 || 1}>
            <img src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?cs=srgb&dl=pexels-pixabay-279746.jpg&fm=jpg" />
          </GridListTile>
          <GridListTile cols={1 || 1}>
            <img src="https://images.pexels.com/photos/2662183/pexels-photo-2662183.jpeg?cs=srgb&dl=pexels-josh-hild-2662183.jpg&fm=jpg" />
          </GridListTile>
          <GridListTile cols={1 || 1}>
            <img src="https://images.pexels.com/photos/2662183/pexels-photo-2662183.jpeg?cs=srgb&dl=pexels-josh-hild-2662183.jpg&fm=jpg" />
          </GridListTile>
          <GridListTile cols={1 || 1}>
            <img src="https://images.pexels.com/photos/2662183/pexels-photo-2662183.jpeg?cs=srgb&dl=pexels-josh-hild-2662183.jpg&fm=jpg" />
          </GridListTile>
          <GridListTile cols={1 || 1}>
            <img src="https://images.pexels.com/photos/2662183/pexels-photo-2662183.jpeg?cs=srgb&dl=pexels-josh-hild-2662183.jpg&fm=jpg" />
          </GridListTile>
          <GridListTile cols={1 || 1}>
            <img src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?cs=srgb&dl=pexels-pixabay-279746.jpg&fm=jpg" />
          </GridListTile>
          <GridListTile cols={1 || 1}>
            <img src="https://images.pexels.com/photos/2662183/pexels-photo-2662183.jpeg?cs=srgb&dl=pexels-josh-hild-2662183.jpg&fm=jpg" />
          </GridListTile>
        </GridList>
      </div>
    </div>
  );
}
