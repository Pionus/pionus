const Koa = require('koa');
const compose = require('koa-compose');

const config = require('./config.js');
// const system = require('./middlewares/system.js');
const ploader = require('./middlewares/plugin_loader.js');
const tloader = require('./middlewares/template_loader.js');

const system_router = require('./routers/system.js');


const session = require('koa-session2');
const convert = require('koa-convert');
// const passport = require('koa-passport');

const app = new Koa();

// use custom template render
app.use(tloader(config.theme_path));

//app.use(pl(config.plugin_path))
//    .use(system);

app.use(session());

app.use(system_router.routes());


module.exports = app;
