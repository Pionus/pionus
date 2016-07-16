/*
    the custom render file
*/

import Pug from "koa-pug";

const pug = new Pug({
    // set to current folder
    viewPath: __dirname,
});

export default function(app) {
    pug.use(app);
}
