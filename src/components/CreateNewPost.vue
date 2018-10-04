<template lang="pug">
#root
	button.fab(@click="isVisible = !isVisible")
		fa(far, icon="edit")
	transition(name="fade")
		window(	title="New Post",
				:icon="['far', 'edit']",
				v-if="isVisible",
				@closebuttonclick="isVisible = false")
			.viewport
				textarea(v-model="message",
						 :placeholder="placeholder",
						 @keydown.ctrl.enter.exact="postButtonPressed($event)",
						 @keydown.meta.enter.exact="postButtonPressed($event)")
				.commands
					button.submit(@click="postButtonPressed($event)",:disabled="!canPost") 投稿する
					span.length(:class="{ error: !canPost }") {{ maxLength - message.length }}
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit, Watch } from "vue-property-decorator";
import Window from "../components/Window.vue";
import { mapActions } from "vuex";
@Component({
	components: { Window },
	methods: {
		 ...mapActions([
			"post",
		]),
	},
})
export default class CreateNewPost extends Vue {
	private isVisible = false;

	private message = "";

	private placeholder;

	private readonly maxLength = 1000;

	private isFreezed = false;

	public get canPost() { return this.message.length !== 0 && this.message.length <= this.maxLength && !this.isFreezed }

	public mounted() {
		this.updatePlaceHolder();
	}

	public postButtonPressed(event: Event) {
		if (!this.canPost) {
			return;
		}
		event.preventDefault();
		return this.postAsync({ message: this.message });
	}

	public postAsync(option: any) {
		return new Promise((resolve) => {
			this.isFreezed = true;
			setTimeout(() => {
				this.post(option);
				this.message = "";
				this.isFreezed = false;
				this.isVisible = false;
				resolve();
			}, 100);
		});
	}

	@Watch("isVisible")
	public isVisibleChanged(iv: boolean, _: boolean) {
		if (iv) {
			this.updatePlaceHolder();
		}
	}

	public updatePlaceHolder() {
		const ph = [
			"何を書く？",
			"書きたいことは？",
			"何について話そう？",
			"さあ、なんて言う？",
			"今どうしてる？",
		];

		this.placeholder = ph[Math.floor(Math.random() * ph.length)];
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
	flex-direction: row-reverse;
	align-items: center;
	span.length {
		margin-right: 1rem;

		color: black;
		&.error {
			font-weight: bold;
			color: red;
		}
		transition: all 0.2s ease;
	}

	button.submit {
		width: 6rem;
		height: 2rem;
		background: #2196F3;
		color: #fafafa;
		font-size: 1.2rem;
		border: none;
		box-shadow: 0 0 1rem black;

		&:hover {
			box-shadow: 0 0 1.4rem black;
		}
		&:active {
			box-shadow: 0 0 0.4rem black;
		}

		&:disabled {
			background: #888;
			box-shadow: none;
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
