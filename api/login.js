const Router = require('koa-router');
const User = require('../database/user.js');

const router = new Router();

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
        ctx.status = 400;
        return ctx.body = {msg: 'username and password required!'};
    }

    let isAuth = await User.auth(user, password);
    if(!isAuth) {
        ctx.status = 401;
        return ctx.body = {msg: 'Unauthorized!'};
    }

    console.log('auth!');

    ctx.body = {msg: 'ok'}
})

module.exports = router;
