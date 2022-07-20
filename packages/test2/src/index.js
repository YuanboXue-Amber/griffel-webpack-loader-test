import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'Hello';

ReactDOM.render(
  React.createElement(App, { title }),
  document.getElementById('app')
);

module.hot.accept();
