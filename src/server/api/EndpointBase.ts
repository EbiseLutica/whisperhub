// A class to implement endpoints easily

import IEndpoint, { IEndpointMeta, IRequest } from "./IEndPoint";

export default class EndPointBase implements IEndpoint {
	constructor(
		public path: string,
		public meta: IEndpointMeta,
		public method: "get" | "post" | "delete" | "put",
		public exc: (req: IRequest) => any) { }
}
