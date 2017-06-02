const ngtools = require('@ngtools/webpack');
const webpack = require('webpack');
const path = require('path');
const app_utils_1 = require("@angular/cli/utilities/app-utils");
const webpack_config_1 = require("@angular/cli/models/webpack-config");

// Angular CLI webpack settings
const app = app_utils_1.getAppFromConfig('');
const webpackConfig = new webpack_config_1.NgCliWebpackConfig({}, app).buildConfig();

module.exports = {
    devtool: 'source-map',
    entry: {
        main: ['./src/cli_uni/app.server.ts', './src/cli_uni/server-aot.ts']
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist_universal'),
        filename: 'server.js',
    },
    plugins: [
        new ngtools.AotPlugin({
            tsConfigPath: './tsconfig-uni.json'
        }),
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    ],
    module: {
        rules: webpackConfig.module.rules,
    }
}