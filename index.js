if (!process.env.BABEL_ENV && !process.env.NODE_ENV) {
  process.env.BABEL_ENV = 'development';
}

module.exports = require('babel-preset-react-app');
