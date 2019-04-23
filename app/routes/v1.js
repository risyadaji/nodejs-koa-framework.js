const Router = require('koa-router');

const router = new Router();

const user = require('../services/user');

router.get('/user', user.listAllUsers);
router.get('/user/:id', user.findUser);

router.use('/v1', router.routes());


module.exports = router;
