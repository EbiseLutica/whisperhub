<template lang="pug">
#root(v-show="isVisible")
	.backdrop
	.window(ref="window")
		.header
			.icon
				fa(:icon="icon")
			.title {{ title }}
			.close(@click="onClose()")
				fa(fas, icon="times")
		.body
			slot
</template>

<script lang="ts">
import { Prop, Component, Vue, Watch } from "vue-property-decorator";
import App from "../App.vue";
@Component({
	components: { UiDialog },
})
export default class UiDialog extends Vue {
	@Prop() private title: string;
	@Prop() private icon: string[];
	@Prop() private isVisible: boolean;

	private x = 0;
	private y = 0;

	public get windowStyle() { return `left: ${this.x}px; top: ${this.y}px`; }

	public onClose() {
		const args = { cancel: false };
		this.$emit("closebuttonclick", args);

		if (args.cancel) { return; }
		this.isVisible = false;
	}

	@Watch("isVisible")
	public visibled(_: boolean, __: boolean) {
	}

	public mounted() {
		window.addEventListener("resize", () => this.updateStyle());
		setTimeout(() => this.updateStyle(), 20);
	}

	public updateStyle() {
		const el = this.$refs.window as HTMLElement;
		console.log(el);
		if (!el) { return; }
		el.style.left = (this.$root.$el.clientWidth - el.clientWidth) / 2 + "px";
		el.style.top = (this.$root.$el.clientHeight - el.clientHeight) / 2 + "px";
		setTimeout(() => this.updateStyle(), 20);
	}
}
</script>

<style lang="scss" scoped src="../components/css/window.scss"/>
