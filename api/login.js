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
        return ctx.reply(400, 'username and password required!');
    }

    let isAuth = await User.auth(user, password);
    if(!isAuth) {
        return ctx.reply(401);
    }

    console.log('auth!');

    return ctx.reply(200);
})

module.exports = router;
