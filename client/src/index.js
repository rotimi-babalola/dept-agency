import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <h1>Hello world</h1>
);

export default App;

render(<App />, document.getElementById('app'));
