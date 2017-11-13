const path = require('path');
const webpack = require('webpack');

const isProd = process.argv.includes('-p');
const config = ({
    context: path.join(__dirname, '/src'),
    entry: [
        './index.js',
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: `graphql-query-client${isProd ? '.min' : ''}.js`,
        library: 'graphql-query-client',
        libraryTarget: 'umd',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ],
});

if (isProd) {
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false,
        },
        sourceMap: true,
    }));
}


module.exports = config;
