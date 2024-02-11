const path = require('path');

module.exports = {
    mode: 'development', // 'production' | 'development' | 'none'
    entry: './dist/index.js',
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(glsl|vs|fs|vert|frag)$/, // Handle shaders if you're using them
                use: ['raw-loader']
            }
        ]
    }
};