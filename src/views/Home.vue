<template lang="pug">
#root
	v-header
	.container
		post-list(:posts="localTimeline")
	create-new-post
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import PostList from "../components/PostList.vue";
import IPost from "../interfaces/IPost";
import { mapGetters, mapActions } from "vuex";
import VHeader from "../components/VHeader.vue";
import CreateNewPost from "../components/CreateNewPost.vue";
@Component({
	components: { PostList, VHeader, CreateNewPost },
	computed: {
		...mapGetters(["localTimeline"]),
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
		this.fetchLTL();
	}
}
</script>
