import EndPointBase from "../EndpointBase";

export default new EndPointBase("/ping", {
	description: "pingをサーバーに送信します。",
}, "get", (req) => ({
	ok: true,
	ping: "pong",
}));
