import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from '../styles/global';
import ThemWrapper from '../styles/ThemWrapper';

import routes from './routes';

const App = () => (
  <ThemWrapper>
    <Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          {routes.default.map(({
            exact,
            path,
            component,
            id,
          }) => (<Route key={id} exact={exact} path={path} component={component} />))}
        </Switch>
      </Router>
    </Fragment>
  </ThemWrapper>
);

export default App;

render(<App />, document.getElementById('app'));
