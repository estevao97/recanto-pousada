import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: ' #8c002a',
    borderRadius: 9,
    border: 0,
    color: 'white',
    height: 78,
    width: 200,
    padding: '0 30px 3px',
    fontSize: 22,
    '&:hover': {
      backgroundColor: '#ffffff',
      borderColor: 'black',
      borderSize: 10,
      boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
      color: '#000000',
    },
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Link to="/Login">
      <Button className={clsx(classes.root, className)} {...other}>
        {children || 'class names'}
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
