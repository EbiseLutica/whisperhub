<template lang="pug">
#root
	v-header
	.container
		post-list(v-if="$store.getters.tabMode === 'ltl'", :posts="localTimeline")
		post-list(v-if="$store.getters.tabMode === 'gtl'", :posts="globalTimeline")
		threads-list(v-if="$store.getters.tabMode === 'threads'")
	create-new-post
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import PostList from "../components/PostList.vue";
import IPost from "../interfaces/IPost";
import { mapGetters, mapActions } from "vuex";
import VHeader from "../components/VHeader.vue";
import CreateNewPost from "../components/CreateNewPost.vue";
import ThreadsList from "../components/ThreadsList.vue";
@Component({
	components: { PostList, VHeader, CreateNewPost, ThreadsList },
	computed: {
		...mapGetters([
			"localTimeline",
			"globalTimeline",
		]),
	},
	methods: {
		...mapActions([
			"fetchGTL",
			"fetchLTL",
		]),
	},
})
export default class Home extends Vue {
	private mounted() {
		(this as any).fetchLTL();
		(this as any).fetchGTL();
	}
}
</script>
