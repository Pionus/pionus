const Router = require('koa-router');

const login = require('./login.js');
const posts = require('./posts.js');

const router = new Router();

router.use('/login', login.routes());
router.use('/posts', posts.routes());

module.exports = router;
