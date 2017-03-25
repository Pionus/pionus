const Router = require('koa-router');

const home = require('./home.js');
const api = require('../api/index.js');
const login = require('./login.js');
const admin = require('./admin.js');

const router = new Router();

router.use('/', home.routes());
router.use('/api', api.routes());
router.use('/login', login.routes());
router.use('/admin', admin.routes());

module.exports = router;
