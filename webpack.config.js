const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),

    entry: './index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    devtool: 'eval',

    devServer: {
        port: 4200
    },
module: {
rules: [
    {
    test: /\.jsx?$/,
        loader: 'babel-loader',
    exclude: /node_modules/,
    query: {
    presets: ['es2015']
}
}
]
},

    resolve: {
        alias: {
            'framework': path.join(__dirname, 'src/framework')
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Native framework',
            template: './index.html'
        })
    ]
};