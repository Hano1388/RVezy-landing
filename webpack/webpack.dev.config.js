const common = require('./webpack.common.config');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'js/bundle.js'
    },

    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, '../dist')
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        },
        client: {
            overlay: true
        },
    },

    module: {
        rules: [
            // here we can setup rules for (css, scss, less, etc..), images(png, jpg, svg, etc..)
        ]
    }
})