const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            { 
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            },
        ]
    },
    output: {
        // publicPath: 'public', //relative path
        filename: 'builded.js',
        path: path.resolve(__dirname, 'public') //absolute path
    },
    resolve: {
        extensions: ['.ts', '.js'] //for module import/export
    },
    devtool: 'eval-source-map',
    mode: 'development',
    // mode: 'production',
}