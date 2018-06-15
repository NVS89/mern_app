"use strict"

const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

exports.devServer = function(options) {
    return {
        devServer: {
            historyApiFallback: true,
            hot: true,
            open: true,
            inline: true,
            stats: 'errors-only',
            port: options.port,
            contentBase: path.join(process.cwd(), 'public/dist'),
            watchContentBase: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new htmlWebpackPlugin({
                title: 'React testing app',
                inject: 'body',
                template: path.join(process.cwd(), 'public/src/index.html')
            })
        ]
    };
}

exports.buildPlugin = function (options) {
    return {
        plugins: [
            new htmlWebpackPlugin({
                inject: 'body',
                template: path.join(process.cwd(), 'public/src/index.html'),
                filename: path.join(process.cwd(), 'public/dist/index.html'),
            })
        ]
    } 
} 

exports.stylus = {
    test: /\.styl$/, 
    loader: 'style-loader!css-loader!stylus-loader'
}

exports.font = {
    test: /\.ttf$/,
    use: ['file-loader']
}

exports.babel = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: ['babel-loader']
}

exports.svg = {
    test: /\.svg$/,
    loader: 'svg-inline-loader'
}

