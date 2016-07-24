import Koa from "koa";
import compose from "koa-compose";

import config from "./config.js";
// import system from "./middlewares/system.js";
import ploader from "./middlewares/plugin_loader.js";
import tloader from "./middlewares/template_loader.js";

import system_router from "./routers/system.js";


import session from "koa-session2";
import convert from "koa-convert";
import passport from "koa-passport";

const app = new Koa();

// use custom template render
app.use(tloader(config.theme_path));

//app.use(pl(config.plugin_path))
//    .use(system);

app.use(session());

app.use(system_router.routes());


export default app;
