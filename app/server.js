const Koa = require('koa');

const app = new Koa();
const v1 = require('./routes/v1');

app.use(v1.routes());
app.use(v1.allowedMethods());

app.listen(3000);
