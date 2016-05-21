import logger from "koa-logger";
import plugin from "./plugin.js";

export default plugin.add("test", logger())
.add("test", ctx => {
    ctx.body = "hello";
})
.add("test", ctx => {
    ctx.body +=" world";
})
.use("test");
