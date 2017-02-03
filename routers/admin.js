const Router = require('koa-router');

const router = new Router();

router.get('/', ctx => {
    return ctx.render('admin/index');
});

router.get('/login', ctx => {
    return ctx.render('admin/login');
});

module.exports = router;
