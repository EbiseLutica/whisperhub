<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
	</div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import PostList from "../components/PostList.vue";
@Component({
	components: {
		HelloWorld,
	},
})
export default class Home extends Vue {}
</script>
