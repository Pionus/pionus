const fs = require('fs');
const path = require('path');
const compose = require('koa-compose');

/**
 * Compose all Plugin for load
 * @param {String} srcpath [dir path where plugins in]
 * @return {Function} for koa.use
 */
function pluginLoader(srcpath, filename = 'index.js') {
    let plugins = {};

    let dirs = getDirs(srcpath);
    let list = [];

    // get all plugins by path
    for(let name of dirs) {
        let fn = require(path.join(srcpath, name, filename));

        if(typeof fn != 'function' && typeof fn.default == 'function') {
            fn = fn.default;
        } else {
            throw(new Error('plugin must be a function!'));
        }

        plugins[name] = fn;

        list.push(function(ctx, next) {
            return fn(ctx, next) || next();
        });
    }

    return compose(list);
}

/**
 * Get all plugins' dir name
 * @return {Array} list of dirname 
 */
function getDirs(srcpath) {
    return fs.readdirSync(srcpath).filter(file => {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}

module.exports = pluginLoader;
