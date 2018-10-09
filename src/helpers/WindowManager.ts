import Vue from "vue";

/**
 * @description WhisperHub のウィンドウを管理するクラスです。このクラスはユーザーがインスタンス化するべきものではありません。App.windows を通してください。
 */
export default class WindowManager {
	constructor(private container: Vue) {}

	public open(view: typeof Vue, propsData?: any) {
		// インスタンス化
		const window = new view({ parent: this.container, propsData }).$mount();
		// DOMへの追加
		this.container.$el.appendChild(window.$el);
	}

	public close(view: Vue) {
		this.container.$el.removeChild(view.$el);
	}

}
