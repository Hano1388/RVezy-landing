const common = require('./webpack.common.config.js');
const { merge } = require('webpack-merge');

module.expoert = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/[name].[contenthash:12].js'
    },
    module: {
        rules: [
            // here we can specify css and img rules and decide how we we wanna minify them
        ]
    },

    // In Optimization property we can implement our startegy on how we want to optimize our bundles 
    optimization: {
        minimize: true,
        minimizer: [
            `...`,
            // here we can specify what tools and strategies to use for optimization
            //  I'll write down some examples in comments but implementing that is beyond just this assesment
            /*
                css-minimizer-plugin

                image-minimizer-plugin


            */
        ]
    }
})