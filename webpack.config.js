"use strict";
const PATHS = require('./config/webpack-path.js');
const loaders = require('./config/webpack-loaders.js'); 
const htmlWebpackPlugin = require('html-webpack-plugin');

const common = {
    entry: {
        app: PATHS.src
    },
    output: {
        path: PATHS.dist,
        filename: '[name].js'
    },
    module: {
        rules: [
            loaders.stylus,
            loaders.babel,
            loaders.font,
            loaders.svg
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    }
};

let config = function (env, argv) {
    switch (argv.mode) {
        case 'production':
            let buildPlugin = loaders.buildPlugin();
            return config = {
                ...common,
                ...buildPlugin,
                devtool: 'source-map'
            };
            break;
        case 'development':
            let devServer = loaders.devServer({
                port: 3000
            });
            return config = {
                ...common,
                ...devServer,
                devtool: 'eval-source-map'
            };
            break;
        default:

    }
};

module.exports = config;