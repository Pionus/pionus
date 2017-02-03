const Router = require('koa-router');

const router = new Router();

router.get('list', ctx => {});

router.put('new', ctx => {});

router.get('item/:id', ctx => {
    let {id} = ctx.params;
});

router.post('item/:id', ctx => {

});

router.del('item/:id', ctx => {

});

module.exports = router;
