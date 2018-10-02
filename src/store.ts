import Vue from "vue";
import Vuex from "vuex";
import IPost from "./interfaces/IPost";
import IMedia from "./interfaces/IMedia";
import IThread from "@/interfaces/IThread";
import UUID from "./helpers/UUID";
Vue.use(Vuex);

const words = [ "おはよう", "ねむい", "おいしい", "ねこ", "テスト" ];

function createDummies(): IPost[] {
	return Array<IPost>(Math.floor(Math.random() * 1000)).fill(undefined).map((_) => Object.assign({}, {
		name: "名無しさん",
		id: UUID(),
		host: "@whisperhub.social",
		isAdmin: Math.random() * 10 < 5,
		isTopicOwner: Math.random() * 10 < 5,
		message: words[Math.floor(Math.random() * words.length)],
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
		threads: Array<IThread>(),
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
				name: "名無しさん",
				id: UUID(),
				host: "@whisperhub.social",
				isAdmin: false,
				isTopicOwner: false,
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
	},
});
