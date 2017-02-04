const Router = require('koa-router');

const router = new Router();

router.get('/', ctx => {
    if(!ctx.session.name) {
        return ctx.redirect('/login');
    }
    return ctx.render('admin/index');
});

module.exports = router;
