const Router = require('koa-router');
const Article = require('../database/article.js');

const router = new Router();

router.get('/', async ctx => {
    let list = await Article.list();

    return ctx.render('index', {list});
});

module.exports = router;
