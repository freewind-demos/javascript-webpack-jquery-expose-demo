module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css' // note style is before css
    }, { 
      test: require.resolve("jquery"), 
      loader: "expose?$!expose?jQuery" 
    }]
  }
}