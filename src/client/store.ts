import Vue from "vue";
import Vuex from "vuex";
import IPost from "../interfaces/IPost";
import IMedia from "../interfaces/IMedia";
import IThread from "@/interfaces/IThread";
import UUID from "../helpers/UUID";
Vue.use(Vuex);

const words = [ "おはよう", "ねむい", "おいしい", "ねこ", "テスト" ];

function createDummies(): IPost[] {
	return Array<IPost>(Math.floor(Math.random() * 50)).fill(undefined).map((_) => Object.assign({}, {
		name: "風吹けば名無し",
		id: UUID(),
		host: "@whisperhub.social",
		isAdmin: Math.random() * 10 < 5,
		isTopicOwner: Math.random() * 10 < 5,
		message: words[Math.floor(Math.random() * words.length)],
		isRootOfThread: Math.random() * 10 < 5,
		reactions: [
			{ reactionChar: "🤔", reactionCount: 10, isMyReaction: false },
			{ reactionChar: "👍", reactionCount: 3, isMyReaction: true },
		],
		isStarred: false,
		timestamp: "たった今",
		isMyPost: false,
	}));
}

export default new Vuex.Store({
	state: {
		localTimeline: Array<IPost>(),
		globalTimeline: Array<IPost>(),
		isSignedIn: false,
		userName: "",
		tabMode: "ltl",
	},
	mutations: {
		fetchLTL(state) {
			if (state.localTimeline.length === 0) {
				state.localTimeline = createDummies();
			}
		},
		fetchGTL(state) {
			if (state.globalTimeline.length === 0) {
				state.globalTimeline = createDummies();
			}
		},
		post(state, post: any) {
			state.localTimeline.unshift({
				name: "風吹けば名無し",
				id: UUID(),
				host: "@whisperhub.social",
				isAdmin: false,
				isTopicOwner: false,
				// undefined の場合falseにする
				isRootOfThread: !!post.isRootOfThread,
				reactions: [],
				isStarred: false,
				timestamp: "たった今",
				message: post.message,
				isMyPost: true,
			});
		},
		setStar(state, payload: any) {
			state.localTimeline.find((p) => p.id === payload.id).isStarred = payload.isStarred;
		},
		addReaction(state, payload: any) {
			const p = state.localTimeline.find((p) => p.id === payload.postId);
			// 該当ポストがなければ抜ける
			if (!p) { return; }
			// リアクション配列がなければ新規作成
			if (!p.reactions) { p.reactions = []; }
			// リアクションの反映
			const reaction = p.reactions.find((r) => r.reactionChar === payload.reaction);
			// 押していれば抜ける
			if (reaction.isMyReaction) {
				return;
			}
			// 存在しなければ作る
			if (!reaction) {
				p.reactions.push({
					reactionChar: payload.reaction,
					reactionCount: 1,
					isMyReaction: true,
				});
			} else {
				reaction.reactionCount++;
				reaction.isMyReaction = true;
			}
		},
		removeReaction(state, payload: any) {
			const p = state.localTimeline.find((p) => p.id === payload.postId);
			// 該当ポストがなければ抜ける
			if (!p || !p.reactions) { return; }
			// リアクションの反映
			const reaction = p.reactions.find((r) => r.reactionChar === payload.reaction);
			// 押していなければ抜ける
			if (!reaction.isMyReaction) {
				return;
			}
			// 存在しなければ抜ける
			if (!reaction) {
				return;
			} else {
				reaction.reactionCount--;
				reaction.isMyReaction = false;

				// リアクションがなくなったら消す
				if (reaction.reactionCount < 1) {
					p.reactions = p.reactions.filter((r) => r.reactionChar !== payload.reaction);
				}
			}
		},
		signIn(state, payload: any) {
			state.isSignedIn = true;
			state.userName = payload.userName;
		},
		setTabMode(state, payload: any) {
			const normalized = payload.tabMode ? payload.tabMode.toLowerCase() : "";
			switch (normalized) {
				case "ltl":
				case "threads":
				case "gtl":
					state.tabMode = normalized;
					break;
				default:
					// tslint:disable-next-line:no-console
					console.error(`BUG: "${payload.tabMode}" is invalid tab-mode!!`);
					break;
			}
		},
	},
	actions: {
		fetchLTL({ commit }) {
			commit("fetchLTL");
		},
		fetchGTL({ commit }) {
			commit("fetchGTL");
		},
		post(ctx, payload) {
			ctx.commit("post", payload);
		},
		setStar(ctx, payload) {
			ctx.commit("setStar", payload);
		},
		addReaction(ctx, payload) {
			ctx.commit("addReaction", payload);
		},
		removeReaction(ctx, payload) {
			ctx.commit("removeReaction", payload);
		},
		signIn(ctx, payload) {
			ctx.commit("signIn", payload);
		},
		setTabMode(ctx, payload) {
			ctx.commit("setTabMode", payload);
		},
	},
	getters: {
		localTimeline: (s) => s.localTimeline,
		globalTimeline: (s) => s.globalTimeline,
		threads: (s) => s.localTimeline.filter((p) => p.isRootOfThread),
		userName: (s) => s.userName,
		isSignedIn: (s) => s.isSignedIn,
		tabMode: (s) => s.tabMode,
	},
});
