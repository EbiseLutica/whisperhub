<template lang="pug">
header.vheader
	.title
		img(src="../assets/title.svg")
	router-link.command(tag="a", to="/", :class="{ active: is('home') }")
		fa(fas, icon="home", fixed-width)
	router-link.command(tag="a", to="/Thread", :class="{ active: is('thread') }")
		fa(fas, icon="folder", fixed-width)
	router-link.command(tag="a", to="/Global", :class="{ active: is('global') }")
		fa(fas, icon="globe", fixed-width)
	router-link.command(tag="a", to="/Messaging", :class="{ active: is('messaging') }")
		fa(fas, icon="comment", fixed-width)


</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
@Component({
	components: { VHeader },
})
export default class VHeader extends Vue {
	private view = "home";

	public is(routeName: string) {
		return this.$route ? (routeName === this.$route.name) : false;
	}
}
</script>

<style lang="scss">
header.vheader {
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	right: 0;
	height: 4rem;
	background: rgba(#424242, 0.5);
	backdrop-filter: blur(8px);
	box-shadow: 0 0 4px #0a0a0a;
	color: #FAFAFA;
	align-items: stretch;

	padding: 0 5rem;

	.title {
		font-weight: bold;
		margin: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		img {
			height: 1.8rem;
			filter: drop-shadow(0 0 4px #fafafa);
		}
	}

	.command {
		width: 4rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #9C27B0;
		cursor: pointer;
		&:hover {
			background: rgba(#424242, 0.1);
		}
		&.active {
			border: none;
			border-bottom: 6px solid #9C27B0;
			background: rgba(#424242, 0.3);
		}
		transition: all 0.2s ease;
	}
	transition: all 0.2s ease;
}
</style>
