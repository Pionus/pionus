import Koa from "koa";
import compose from "koa-compose";

import config from "./config.js";
import system from "./middlewares/system.js";
import pl from "./middlewares/plugin_loader.js";

const app = new Koa();

app.use(pl(config.plugin_path))
    .use(system);

app.listen(8089);
