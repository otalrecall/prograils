var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.json']
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        loaders: [
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
        },
        { 
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
        },
        { 
            test: /\.png$/, 
            loader: "url-loader?limit=100000" 
        },
        { 
            test: /\.jpg$/, 
            loader: "file-loader" 
        },
        {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=application/octet-stream'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'file'
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
            loader: 'url?limit=10000&mimetype=image/svg+xml'
        },
        {
            test: /\.json$/,
            loader: "json-loader"
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};