import React from 'react';
import {
  useButtonStyles,
  useHeroStyles,
  useTextStyles,
} from './App.styles';
import { mergeClasses } from '@griffel/react';

function App() {
  const heroClasses = useHeroStyles();
  const buttonClasses = useButtonStyles();
  const textStyles = useTextStyles();
  return (
    <div className={heroClasses.root}>
      <div
        className={mergeClasses(textStyles.root, textStyles.header)}
      >
        Hello
      </div>
      <div
        className={mergeClasses(
          textStyles.root,
          textStyles.header,
          textStyles.purple
        )}
      >
        Ahoj
      </div>
      <button
        className={mergeClasses(buttonClasses.root, textStyles.root)}
      >
        <span className={buttonClasses.icon}>⛵️</span>
        Start Journey
      </button>
    </div>
  );
}
export default App;
