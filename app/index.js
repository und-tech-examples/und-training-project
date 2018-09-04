const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = {message:'Hello World'};
});

/*
Start your code here
*/

/*
Finish your code here
*/

app
  .use(router.routes())
  .use(router.allowedMethods());

console.log('Server run on http://localhost:3000/')

app.listen(3000);