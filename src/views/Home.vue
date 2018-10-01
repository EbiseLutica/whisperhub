<template lang="pug">
	post-list(:posts="posts")
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import PostList from "../components/PostList.vue";
@Component({
	components: { PostList },
})
export default class Home extends Vue {

	public readonly words = [ "おはよう", "ねむい", "おいしい", "ねこ", "テスト" ];

	public get posts() {
		const posts = Array<any>(Math.floor(Math.random() * 1000)).fill(undefined).map((_) => Object.assign({}, {
			name: "名無しさん",
			host: "@whisperhub.social",
			isAdmin: Math.random() * 10 < 5,
			isTopicOwner: Math.random() * 10 < 5,
			message: this.words[Math.floor(Math.random() * this.words.length)],
			reactions: [
				{ reactionChar: "🤔", reactionCount: 10, isMyReaction: false },
				{ reactionChar: "👍", reactionCount: 3, isMyReaction: true },
			],
			isStarred: false,
			timestamp: "たった今",
		}));
		return posts;
	}
}
</script>
