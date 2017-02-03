const Router = require('koa-router');

const api = require('./api.js');
const admin = require('./admin.js');
const pool = require('../database/db.js');

const router = new Router();

router.get('/', ctx => {
    return ctx.render('index');
});

router.use('/api', api.routes());
router.use('/admin', admin.routes());

module.exports = router;
