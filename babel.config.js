// babel.config.js
module.exports = {
    presets: [
      '@babel/preset-env',  // Include if you're using modern JavaScript features
      '@babel/preset-react', // Include for React support
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      // Add any other plugins you may need
    ],
  };
  