"use strict";
var path = require('path'); // для работы с path

module.exports = {
  mode: 'development',
  entry: {
      'jswl': './src/jswl.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'jswl',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  watch: true,
  watchOptions: {
      aggregateTimeout: 500,
      poll: 1000 // порверяем измемения раз в секунду
  }
  
};
