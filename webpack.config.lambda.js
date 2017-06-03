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
        main: ['./src/lambda/app.server.ts', './src/lambda/lambda.ts']
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist_lambda'),
        filename: 'lambda.js',
        libraryTarget: 'commonjs2',
    },
    plugins: [
        new ngtools.AotPlugin({
            tsConfigPath: './tsconfig-lambda.json'
        }),
        // new webpack.optimize.UglifyJsPlugin({ sourceMap: true }) // aws-serverless-express でエラーが起こるので未使用
    ],
    module: {
        rules: webpackConfig.module.rules,
    }
}