<template lang="pug">
.window
	.header(@mousedown="down($event)")
		.title {{ title }}
		.close(@click="onClose()")
			fa(fas, icon="times")
	.body
		slot
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
@Component({
	components: { Window },
})
export default class Window extends Vue {
	@Prop() private title: string;
	@Prop() private width;
	@Prop() private height;
	private x = 192;
	private y = 192;

	private isDragging = false;

	public down(e: MouseEvent) {
		if (e.button != 0) return;
		this.isDragging = true;
	}
	public up(e: MouseEvent) {
		if (e.button != 0) return;
		this.isDragging = false;
	}

	public move(e: MouseEvent) {
		if (e.button != 0 || !this.isDragging) return;

		this.x += e.movementX;
		this.y += e.movementY;
		this.updateStyle();
	}

	public onClose() {
		this.$emit("closebuttonclick");
	}

	mounted() {
		window.addEventListener("mousemove", this.move);
		window.addEventListener("mouseup", this.up);
		this.updateStyle();
	}

	updateStyle() {
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
		background: rgba(#777, 0.3);
		backdrop-filter: blur(8px);
		font-size: 1.2rem;
		cursor: move;

		.title {
			color: #0a0a0a;
			user-select: none;
		}
		.close {
			margin-left: auto;
			cursor: pointer;
			color: #f44336;
		}
	}
	.body {
		margin: auto;
		background: rgba(#fafafa, 0.6);
		backdrop-filter: blur(8px);
		padding: 0.5rem 2rem;
	}
}
</style>

