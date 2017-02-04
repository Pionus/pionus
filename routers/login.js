const Router = require('koa-router');

const router = new Router();

router.get('/', ctx => {
    return ctx.render('admin/login');
});

router.post('/', ctx => {
    console.log('post', ctx.request.body);
    ctx.body = 'ok';
})

module.exports = router;
