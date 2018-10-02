<template lang="pug">
window(title="藍ちゃん")
	img(src="https://misskey.m544.net/assets/ai.png" height="640")
</template>

<script lang="ts">
import { Prop, Component, Vue, Emit } from "vue-property-decorator";
import Window from "../components/Window.vue";
@Component({
	components: { Window },
})
export default class AiWindow extends Vue {
}
</script>

<style lang="scss" scoped>
img {
	margin: 2rem;
}
</style>
