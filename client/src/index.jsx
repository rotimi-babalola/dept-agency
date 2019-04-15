import React, { Fragment } from 'react';
import { render } from 'react-dom';

import GlobalStyle from '../styles/global';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <h1>Hello world</h1>
  </Fragment>
);

export default App;

render(<App />, document.getElementById('app'));
