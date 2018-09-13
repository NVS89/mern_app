const PATHS = require('./config/webpack-path.js');
const loaders = require('./config/webpack-loaders.js');

const common = {
    entry: {
        app: ['babel-polyfill', PATHS.src],
    },
    output: {
        path: PATHS.dist,
        filename: '[name].js',
    },
    module: {
        rules: [
            loaders.stylus,
            loaders.babel,
            loaders.font,
            loaders.svg,
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ],
    },
};

let config = function config(env, argv) {
    let option = {};
    let devServer;
    let buildPlugin;
    switch (argv.mode) {
        case 'production':
            buildPlugin = loaders.buildPlugin();
            option = {
                ...common,
                ...buildPlugin,
                devtool: 'source-map',
            };
            return option;
        case 'development':
            devServer = loaders.devServer({
                port: 3000,
            });
            option = {
                ...common,
                ...devServer,
                devtool: 'eval-source-map',
            };
            return option;
        default:
            break;
    }
};

module.exports = config;
