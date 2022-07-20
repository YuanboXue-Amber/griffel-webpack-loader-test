import React from 'react';
import { useHeroStyles } from '../../test1/src/App.styles';

function App() {
  const heroClasses = useHeroStyles();
  return React.createElement(
    'div',
    { className: heroClasses.root },
    'hi'
  );
}
export default App;
