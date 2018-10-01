<template lang="pug">
#app
	v-header
	.container
		router-view
	create-new-post
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import VHeader from "./components/VHeader.vue";
import CreateNewPost from "./components/CreateNewPost.vue";
@Component({
	components: { VHeader, CreateNewPost },
})
export default class App extends Vue {
	public mounted() {
	}
}
</script>

<style lang="scss">
* {
	font-family: "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック体", "YuGothic", "メイリオ", sans-serif;
}

.container {
	overflow: auto;

	@media screen and (min-width:480px) {
		padding: 3rem 0.5rem 0 0.5rem;
	}
	@media screen and (min-width:768px) and ( max-width:1024px) {
		padding: 3rem 1rem 0 1rem;
	}
	@media screen and (min-width:1024px) {
		padding: 3rem 6rem 0 6rem;
	}
}
</style>
