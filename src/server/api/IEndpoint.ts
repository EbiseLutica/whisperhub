/* WhisperHub REST API の抽象化されたインターフェイス。 */

export interface IEndpointMeta {
	description: string;
	requireCertificate?: boolean;
	requireAdmin?: boolean;
}

export interface IRequest {
	param: any;
	query: any;
	token?: string;
}

export default interface IEndpoint {
	/**
	 * @description このエンドポイントのURLパス。
	 */
	path: string;

	/**
	 * @description このエンドポイントのメタデータ。
	 */
	meta: IEndpointMeta;

	/**
	 * @description HTTP メソッド文字列。
	 */
	method: "get" | "post" | "delete" | "put";

	/**
	 * @description エンドポイントにアクセスされたときに実行されるコールバック。
	 */
	exc: (req: IRequest) => any;
}
