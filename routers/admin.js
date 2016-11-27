import Router from "koa-router";

const router = new Router();

router.get("/", ctx => {
    return ctx.render("admin");
});

export default router;
