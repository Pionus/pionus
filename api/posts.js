const Router = require('koa-router');
const Article = require('../database/article.js');

const router = new Router();

router.get('/list/:page?', async ctx => {
    let {page} = ctx.params || 0;

    let list = await Article.list(page);

    return ctx.reply(200, list);
});

router.put('/new', ctx => {

});

router.get('/:id', async ctx => {
    let {id} = ctx.params;

    let article = await Article.byId(id);

    return ctx.reply(200, article);
});

router.post('/:id', ctx => {

});

router.del('/:id', ctx => {

});

module.exports = router;
