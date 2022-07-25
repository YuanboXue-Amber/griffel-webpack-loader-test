import React from 'react';
import { useHeroStyles } from '../../test1/src/App.styles';

function App() {
  const heroClasses = useHeroStyles();
  return React.createElement(
    'a',
    {
      className: heroClasses.root,
      href: undefined,
      // href: 'vscode://file/Users/yuanboxue/dev/fluent/griffel/g2/griffel/packages/devtools/src/SlotCSSRules.tsx:5:10',
    },
    'hi'
  );
}
export default App;
