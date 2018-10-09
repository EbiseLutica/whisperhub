<template lang="pug">
#app
	router-view
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import WindowManager from "./helpers/WindowManager";
@Component({})
export default class App extends Vue {
	static windows : WindowManager;

	public mounted() {
		App.windows = new WindowManager(this);
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
