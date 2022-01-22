const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/main.js',
    output : {
        path : __dirname + '/dist',
        filename : 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: "development"
}