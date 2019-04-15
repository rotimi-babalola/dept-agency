/* eslint-disable global-require */
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = (env) => {
  let envConfig;
  // eslint-disable-next-line no-unused-expressions
  !env.mode
    ? (envConfig = require('./webpack-build-utils/webpack.development'))
    // eslint-disable-next-line import/no-dynamic-require
    : (envConfig = require(`./webpack-build-utils/webpack.${env.mode}`));
  return webpackMerge({ mode: env.mode }, commonConfig, envConfig);
};
