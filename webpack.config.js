let webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');

module.exports = {
    resolve: {
        extensions: ['.js']
    },
    entry: [
        //"babel-polyfill", //node_modules/babel-polyfill/polyfill.js
        path.resolve(__dirname, 'src/index.js') // Defining path seems necessary for this to work consistently on Windows machines.
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: [],
                    plugins:["transform-runtime"]
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
            template: 'src/index.html',
            filename: "index.html"
        }),
    ],
};