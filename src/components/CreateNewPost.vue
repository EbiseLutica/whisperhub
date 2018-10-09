<template lang="pug">
button.fab(@click="spawn()")
	fa(far, icon="edit")
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit, Watch } from "vue-property-decorator";
import App from "../App.vue";
import PostWindow from "../components/PostWindow.vue";
@Component({})
export default class CreateNewPost extends Vue {
	private isVisible = false;

	private spawn() {
		App.windows.open(PostWindow);
	}
}
</script>

<style lang="scss" scoped>
$accent: #9C27B0;
$accent-light: #BA68C8;
$accent-dark: #6A1B9A;
button.fab {
	color: #fafafa;
	font-size: 16px;
	background: $accent;
	box-shadow: 0 0 1rem #000;
	text-align: center;
	border-radius: 50%;
	border: none;
	width: 4rem;
	height: 4rem;
	position: fixed;
	right: 2rem;
	bottom: 2rem;
	outline: none;
	transition: all 0.2s ease;
	&:hover {
		box-shadow: 0 0 2rem #000;
		background: $accent-light;
	}

	&:active {
		box-shadow: 0 0 0.4rem #000;
		background: $accent-dark;
	}
}
</style>
