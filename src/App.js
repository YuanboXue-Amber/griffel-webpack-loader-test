import React from 'react';
import { useStyles } from './App.styles';

const App = ({ title }) => {
  const classes = useStyles();
  return <div className={classes.root}>{title}</div>;
};

export default App;
