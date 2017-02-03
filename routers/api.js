const Router = require('koa-router');

const posts = require('./api/posts.js');

const router = new Router();

router.use('posts', posts.routes());

module.exports = router;
