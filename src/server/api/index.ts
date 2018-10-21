// WhisperHub API Server

// Load deps
import Koa from "koa";
import Router from "koa-router";

import path from "path";
import glob from "glob";
import IEndpoint from "./IEndpoint";

const app = new Koa();
const router = new Router();

// Register all rest api

glob.sync("**/*.ts", {
	cwd: path.resolve(__dirname + '/rest/')
}).map((path) => {
	const module = require(`./rest/${path}`).default as IEndpoint;
	console.log(`Initialize endpoint ${module.path} ${module.method} ${module.meta.description}`);
	router[module.method](module.path, (ctx) => {
		ctx.body = JSON.stringify(module.exc({
			param: ctx.params,
			query: ctx.query,
			token: ctx.header["X-WhisperHub-Token"],
		}));
		console.log(`handled ${module.path}`);
	});
});

app.use(async (ctx, next) => {
	try {
		await next()
		if (ctx.status === 404) {
			ctx.body = JSON.stringify({
				ok: false,
				error: "Not Found",
			});
		}
	} catch (err) {
		ctx.body = JSON.stringify({
			ok: false,
			error: "Server Error",
		});
		ctx.status = 500;
	}
});

app.use(router.routes());

module.exports = app;
