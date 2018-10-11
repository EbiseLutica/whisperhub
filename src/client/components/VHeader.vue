<template lang="pug">
header.vheader
	.title
		img(src="../assets/title.svg")
	a.command(@click="$store.commit('setTabMode', { tabMode: 'ltl' })", :class="{ active: is('ltl') }")
		fa(fas, icon="home", fixed-width)
	a.command(@click="$store.commit('setTabMode', { tabMode: 'threads' })", :class="{ active: is('threads') }")
		fa(fas, icon="folder", fixed-width)
	a.command(@click="$store.commit('setTabMode', { tabMode: 'gtl' })", :class="{ active: is('gtl') }")
		fa(fas, icon="globe", fixed-width)
	a.command(@click="spawnMessagingWindow()")
		fa(fas, icon="envelope", fixed-width)
	.right
		a(href="#").user {{ $store.getters.userName }}


</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import App from "../App.vue";
import MessagingWindow from "./MessagingWindow.vue";
@Component({
	components: { VHeader },
})
export default class VHeader extends Vue {
	private view = "home";

	public is(tabMode: string) {
		return this.$store.getters.tabMode === tabMode;
	}

	public spawnMessagingWindow() {
		App.windows.open(MessagingWindow);
	}
}
</script>

<style lang="scss">
header.vheader {
$accent-light: #BA68C8;
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	right: 0;
	height: 4rem;
	@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
		background: rgba(#424242, 0.8);
		backdrop-filter: blur(8px);
	}
	background: rgba(#424242, 0.9);
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
			filter: drop-shadow(0 0 4px #424242);
		}
	}

	.command {
		width: 4rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		color: $accent-light;
		cursor: pointer;
		&:hover {
			background: rgba(#424242, 0.1);
		}
		&.active {
			border: none;
			border-bottom: 6px solid $accent-light;
			background: rgba(#424242, 0.3);
		}
		transition: all 0.2s ease;
	}

	.right {
		margin-left: auto;
		display: flex;
		align-items: center;
		.user {
			font-size: 1.3rem;
			text-decoration: none;
			color: #fafafa;
			&:hover, &:active {
				text-decoration: underline;
			}

			&:hover {
				color: #d8d8d8;
			}
			&:active {
				color: #e5e5e5;
			}
		}
	}

	transition: all 0.2s ease;
}
</style>
