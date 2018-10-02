<template lang="pug">
	post-list(:posts="localTimeline")
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import PostList from "../components/PostList.vue";
import IPost from "../interfaces/IPost";
import { mapState, mapActions } from "vuex";
@Component({
	components: { PostList },
	computed: {
		...mapState(["localTimeline"])
	},
	methods: {
		...mapActions([
			"fetchGTL",
			"fetchLTL",
		]),
	}
})
export default class Home extends Vue {
	private mounted() {
		this.fetchLTL();
	}
}
</script>
