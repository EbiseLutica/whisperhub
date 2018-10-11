<template lang="pug">
window(title="メッセージ", width="512px", :icon="[ 'fas', 'envelope' ]")
	h1 ボトルメール
		small(style="font-size: 1rem;") &nbsp;(近日登場予定)
	hr
	h2 見知らぬ誰かへ、お手紙を。
	p WhisperHub のメッセージ機能では、このインスタンスの誰かに、名前を知らせずにメッセージを送ることができます。ボトルメールのようなものです。
	p 届いたメッセージには返信することができるので、顔も名前も知らない、運命の相手との会話をお楽しみください。
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Window from "./Window.vue";
@Component({
	components: { Window },
})
export default class MessagingWindow extends Vue { }
</script>

<style lang="scss" scoped>

</style>
