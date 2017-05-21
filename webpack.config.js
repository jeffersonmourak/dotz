/**
 * Created by jeffersonmourak on 21/5/17.
 */
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './');
var APP_DIR = path.resolve(__dirname, 'dev/');

var config = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'dotz.js'
    },
    module : {
        loaders : [
            {
                test : /\.js?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};

module.exports = config;