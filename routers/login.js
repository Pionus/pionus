const Router = require('koa-router');
const User = require('../database/user.js');

const router = new Router();

router.get('/', ctx => {
    return ctx.render('admin/login');
});

module.exports = router;
