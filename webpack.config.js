const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/index.jsx'],
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    output: {
        filename: './index.prod.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react'
                    ]
                }
            },
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}