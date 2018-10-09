<template lang="pug">
.window
	.header(@mousedown="down($event)")
		.icon
			fa(:icon="icon")
		.title {{ title }}
		.close(@click="onClose()")
			fa(fas, icon="times")
	.body
		slot
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import App from "../App.vue";
@Component({
	components: { Window },
})
export default class Window extends Vue {
	@Prop() private title: string;
	@Prop() private icon: string[];
	@Prop() private width;
	@Prop() private height;
	private x = 192;
	private y = 192;

	private isDragging = false;

	public down(e: MouseEvent) {
		if (e.button !== 0) { return; }
		this.isDragging = true;
	}
	public up(e: MouseEvent) {
		if (e.button !== 0) { return; }
		this.isDragging = false;
	}

	public move(e: MouseEvent) {
		if (e.button !== 0 || !this.isDragging) { return; }

		this.x += e.movementX;
		this.y += e.movementY;
		this.updateStyle();
	}

	public onClose() {
		const args = { cancel: false };
		this.$emit("closebuttonclick", args);

		if (args.cancel) { return; }
		App.windows.close(this);
	}

	public mounted() {
		window.addEventListener("mousemove", this.move);
		window.addEventListener("mouseup", this.up);
		this.updateStyle();
	}

	public updateStyle() {
		this.$el.style.width = this.width;
		this.$el.style.height = this.height;
		this.$el.style.left = `${this.x}px`;
		this.$el.style.top = `${this.y}px`;
	}
}
</script>

<style lang="scss" scoped>
.window {
	box-shadow: 0 0 8px black;
	position: fixed;

	display: flex;
	flex-direction: column;
	justify-content: stretch;

	.header {
		display: flex;
		padding: 0.2rem 2rem;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 2rem;
		background: rgba(#000, 0.3);
		font-size: 1.2rem;
		cursor: move;

		.icon, .title {
			color: #0a0a0a;
			text-shadow: 0 0 6px #fafafa;
			user-select: none;
			margin-right: 1rem;
		}

		.close {
			margin-left: auto;
			cursor: pointer;
			color: #f44336;
		}
	}
	.body {
		margin: auto;

		padding: 0.5rem 2rem;
	}

	@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
		background: rgba(#fafafa, 0.5);
		backdrop-filter: blur(8px);
	}
	background: #fafafa;
}
</style>

