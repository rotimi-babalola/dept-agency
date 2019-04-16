import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import mainTheme from '../variables/mainTheme';

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={mainTheme}>
    {children}
  </ThemeProvider>
);

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeWrapper;
