<template lang="pug">
#root
	.row
		section.card.left
			h1: img(src="../assets/title.svg", alt="WhisperHub", title="WhisperHub" Height="56")
			h2 あなたの本音を、共有しよう。
			p WhisperHub は、名前を知られずに自分の思いのたけを伝えることができる、新しいマイクロブログです。
			p ユーザー登録は必須ですが、
				strong ユーザー名は誰も見ることが出来ません。
				| アプリからはもちろん、開発者もユーザー名を見ることはできない<span class="anchor">*1</span>ので、あなたの本音を思いのまま、法に反しない限り書き込めます。
			p 名を名乗ることが当たり前の現代のソーシャルサービスから少し離れて、あえてアノニマスの世界を体験してみませんか？
			.commands
				ui-button(mode="primary", @click="signUp()") 新規登録
				ui-button(mode="secondary", @click="login()") ログイン
			aside
				p#a1 *1: アプリ開発者がアクセスするAPIから、投稿したユーザーを特定することはできませんが、インスタンスの管理人は、法的措置への対処のため、投稿とユーザーの関連付けを見ることができます。
		section.card.right
			h1 今こんな話をしています...
	section.card.info
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import UiButton from "../ui/UiButton.vue";
import { mapActions, mapGetters } from "vuex";
@Component({
	components: { UiButton },
	computed: {
		...mapGetters(["localTimeline"]),
	},
	methods: {
		...mapActions([
			"signIn",
		]),
	},
})
export default class Index extends Vue {
	public login() {
		(this as any).signIn({
			userName: "Xeltica",
		});
	}

	public signUp() {
		alert("Not implemented!!");
	}
}
</script>

<style lang="scss" scoped>
#root {
	.row {
		display: flex;
		align-items: top;
		justify-content: center;
		flex-wrap: wrap;
		.left {
			flex: 1;
		}
		.right {
			width: 16rem;
			height: 60vh;
			h1 {
				font-size: 1rem;
			}
		}
	}

	.commands {
		margin: 1rem;
		* {
			margin: 0.6rem;
		}
	}

	.card {
		margin: 1rem;
		background: #fafafa;
		border: 1px solid #c0c0c0;
		padding: 1rem;
	}
	.anchor {
		font-size: 0.4rem;
		vertical-align: top;
	}

	aside {
		border-top: solid 1px #9f9f9f;
		padding-top: 0.5rem;
		font-size: 0.8rem;
		color: #555;
	}

	.info {
		width: 20rem;
	}


}
</style>
