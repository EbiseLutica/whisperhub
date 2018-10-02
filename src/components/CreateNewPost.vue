<template lang="pug">
#root
	button.fab(@click="isVisible = true")
		fa(fas icon="plus")
	transition(name="fade")
		window(title="New Post", v-if="isVisible", @closebuttonclick="isVisible = false")
			.viewport
				textarea(v-model="message" :placeholder="placeholder")
				.commands
					button.submit(@click="post()") Post
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from "vue-property-decorator";
import Window from "../components/Window.vue";
@Component({
	components: { Window },
})
export default class CreateNewPost extends Vue {
	private isVisible = false;

	private _mes: string;

	@Prop() private value!: string;

	@Emit()
	public input(value: string) {}

	private get message(): string {
		return this.value;
	}

	private set message(value: string) {
		this.input(value);
	}

	private placeholder = "何を書き込む？"

	public post() {
		this.isVisible = false;
	}

}
</script>

<style lang="scss" scoped>
$accent: #9C27B0;
button.fab {
	color: #fafafa;
	font-size: 16px;
	background: $accent;
	box-shadow: 0 0 1rem #000;
	border-radius: 50%;
	border: none;
	width: 4rem;
	height: 4rem;
	position: fixed;
	right: 2rem;
	bottom: 2rem;
}

.viewport {
	margin-top: 1rem;
}

textarea {
	width: 480px;
	height: 96px;
	border: solid 2px #7f7f7f;
	border-radius: .3rem;
	padding: 1rem;
	font-size: 1rem;
	outline: none;
	resize: none;
	background-color: rgba(white, 0.3);

	&:focus {
		border-color: $accent;
	}
}

.commands {
	padding: 1rem;
	display: flex;
	button.submit {
		width: 6rem;
		height: 2rem;
		background: #2196F3;
		color: #fafafa;
		border: none;
		box-shadow: 0 0 1rem black;
		margin-left: auto;

		&:hover {
			box-shadow: 0 0 1.4rem black;
		}
		&:active {
			box-shadow: 0 0 0.4rem black;
		}
		transition: all 0.2s ease;
	}
	transition: all 0.4s ease;
}
.fade-enter-active, .fade-leave-active {
	transition: all .1s ease-in;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateY(16px);
}
</style>
