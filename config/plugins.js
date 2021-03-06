const path = require('path');
const _ExtractTextPlugin = require('extract-text-webpack-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');

const ExtractTextPlugin = new _ExtractTextPlugin('bundle.css');


const StyleLintPlugin = new _StyleLintPlugin({
    configFile: path.resolve(__dirname, 'stylelint.config.js'),
    context: path.resolve(__dirname, '../src/css'),
    files: '**/*.css',
    failOnError: false,
    quiet: false
});

module.exports = {
    ExtractTextPlugin: ExtractTextPlugin,
    StyleLintPlugin: StyleLintPlugin
}
