const Router = require('koa-router');
const User = require('../database/user.js');

const router = new Router();

router.get('/', ctx => {
    return ctx.render('admin/login');
});

/**
 * User Login
 * @method POST
 *
 * @param user {String}
 * @param password {String}
 *
 * @return
 *      200 - OK
 *      401 - authentication failed
 */
router.post('/', async ctx => {
    console.log('post', ctx.request.body);
    let {user, password} = ctx.request.body;

    if(!user || !password) {
        return ctx.status = 401;
    }

    let isAuth = await User.auth(user, password);
    if(!isAuth) {
        return ctx.status = 401;
    }

    console.log('auth!');

    ctx.body = 'ok';
})

module.exports = router;
