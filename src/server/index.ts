// WhisperHub Core Server

// Load deps
import Koa from "koa";
import serve from "koa-static";
import mount from "koa-mount";
import Router from "koa-router";

const app = new Koa();
const router = new Router();

const apiRoot = "/api/v1";

console.log("Initializing web server...");

// Serve the frontend app
app.use(serve(__dirname + "/../../dist"));

console.log("Initializing API server...");

app.use(mount(apiRoot, require("./api")));

app.use(router.routes());

const port = process.env.port ? process.env.port : 8080;

app.listen(port);
