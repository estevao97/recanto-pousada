import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    background:
      "linear-gradient(45deg, rgb(77, 29, 29) 30%,  rgb(44, 24, 24) 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 65,
    padding: "0 30px",
    fontSize: 25,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Link to="/Login" className="texto">
      <Button className={clsx(classes.root, className)} {...other}>
        {children || "class names"}
      </Button>
    </Link>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
