import React from 'react';
import { useStyles } from './App.styles';

const App = ({ title }) => {
  const classes = useStyles();
  return React.createElement(
    'div',
    { className: classes.root },
    title
  );
};

export default App;
