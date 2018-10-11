// WhisperHub Server Core

import Koa from "koa";
import Router from "koa-router";
import serve from "koa-static";
import send from "koa-send";

const app = new Koa();
const router = new Router();

const apiRoot = "/api/v1";

app.use(serve(__dirname + "/../../dist"));

// API
router.get(`${apiRoot}/ping`, function (ctx, next) {
	ctx.body = JSON.stringify({
		ok: true,
		message: "pong",
	});
});

app.use(router.routes());
app.use(router.allowedMethods());


const port = process.env.port ? process.env.port : 8080;

app.listen(port);
