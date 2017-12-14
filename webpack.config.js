var resolve = require('path').resolve;

module.exports = env => {
  const dist = env.prod ? 'docs' : 'dist';
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, dist),
      pathinfo: !env.prod,
    },
    node: {
      fs: 'empty'
    },
    devtool: env.prod ? 'source-map' : 'eval',
    devServer: {
      contentBase: resolve(__dirname, dist),
      historyApiFallback: true,
      compress: true,
      port: 9000
    },
    module: {
      loaders: [
        {
          test: /\.wasm$/,
          loaders: ['arraybuffer-loader']
        }
      ]
    }
  };
}