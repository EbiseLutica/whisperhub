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

<style lang="scss" scoped src="./css/window.scss"/>

