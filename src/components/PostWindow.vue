<template lang="pug">
	transition(appear, disappear, name="fade")
		window(	title="New Post",
				:icon="['far', 'edit']",
				@closebuttonclick="updatePlaceHolder()")
			.viewport
				textarea(v-model="message",
						 :placeholder="placeholder",
						 @keydown.ctrl.enter.exact="postButtonPressed($event)",
						 @keydown.meta.enter.exact="postButtonPressed($event)")
				.commands
					ui-button(@click="postButtonPressed($event)",:disabled="!canPost", mode="primary") 投稿する
					span.length(:class="{ error: !canPost }") {{ maxLength - message.length }}
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit, Watch } from "vue-property-decorator";
import App from "../App.vue";
import Window from "../components/Window.vue";
import UiButton from "../ui/UiButton.vue";
import { mapActions } from "vuex";
@Component({
	components: { Window, UiButton },
	methods: {
		 ...mapActions([
			"post",
		]),
	},})
export default class PostWindow extends Vue {
	private message = "";

	private placeholder = "";

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
				App.windows.close(this);
				resolve();
			}, 100);
		});
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

