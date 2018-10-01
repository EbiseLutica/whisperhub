<template>
<div id="app">
	<v-header/>
	<div class="container">
		<router-view/>
	</div>
</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import VHeader from "./components/VHeader.vue";
@Component({
	components: { VHeader },
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
	padding: 3rem 6rem 0 6rem;
	overflow: auto;
}
</style>
