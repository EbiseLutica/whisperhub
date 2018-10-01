<template lang="pug">
section
	post(v-for="(p, i) in posts",
		:key="i",
		:name="p.name",
		:host="p.host",
		:isAdmin="p.isAdmin",
		:isTopicOwner="p.isTopicOwner",
		:message="p.message",
		:reactions="p.reactions",
		:isStarred="p.isStarred",
		:timestamp="p.timestamp"
		)
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Post from "../components/Post.vue";
@Component({
	components: { Post },
})
export default class PostList extends Vue {
	@Prop() private posts: any[];

	public mounted() {
		// あとで何かができる
	}
}
</script>

