import React, { Fragment } from 'react';
import { render } from 'react-dom';

import GlobalStyle from '../styles/global';
import ThemWrapper from '../styles/ThemWrapper';

const App = () => (
  <ThemWrapper>
    <Fragment>
      <GlobalStyle />
      <h1>Hello world</h1>
    </Fragment>
  </ThemWrapper>
);

export default App;

render(<App />, document.getElementById('app'));
