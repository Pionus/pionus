const fs = require('fs');
const path = require('path');
const views = require('koa-views');
const serve = require('koa-static2');
const compose = require('koa-compose');

const config = require('../config.js');

// const renderfile = 'render.js';

function templateLoader(theme_path) {
    let theme_name = config.current_theme;
    let dirpath = path.join(theme_path, theme_name);


    // TODO Custem render function instead of koa-views

    // try {
    //     options = require(path.join(theme_path, theme_name, filename));
    //
    //     // if babel default
    //     if(options.default) options = options.default;
    //
    //     // if function then eval
    //     if(typeof options == 'function') options = options.apply(ctx, [ctx, next]);
    // } catch(e) {
    //     throw(new Error('theme render setting error!'));
    // }

    return compose([
        render(dirpath),
        servestatic(dirpath),
    ]);

}

/**
 * Function to render templates for current theme
 * @return {Function} for koa.use
 */
function render(dirpath) {
    let supports = ['html', 'pug'];

    // default options
    let options = {
        map: {
            html: 'swig',
            pug: 'pug',
        },
    };

    // check theme type
    supports.some(item => {
        try {
            fs.accessSync(path.format({
                dir: dirpath,
                name: 'index',
                ext: `.${item}`,
            }));

            options.extension = item;
            return true;

        } catch(e) {
            return false;
        }
    });

    return views(dirpath, options);
}


/**
 * Function to serve static files for current theme
 * @return {Function} for koa.use
 */
function servestatic(dirpath) {
    let staticpath = path.join(dirpath, 'static');

    return serve('static', staticpath);
}

module.exports = templateLoader;
