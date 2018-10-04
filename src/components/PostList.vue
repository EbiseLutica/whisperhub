<template lang="pug">
#root
	transition-group(name="list", tag="div")
		post(v-for="(p, i) in posts",
			:key="p.id",
			:post="p",
			)
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import Post from "../components/Post.vue";
import IPost from "../interfaces/IPost.vue";
@Component({
	components: { Post },
})
export default class PostList extends Vue {
	@Prop() private posts: IPost[];

	public mounted() {
		// あとで何かができる
	}
}
</script>

<style lang="scss" scoped>

.list-item {
  transition: all 0.5s ease-out;
  display: inline-block;
  margin-right: 10px;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform-origin: center left;
  transform: translateX(50%);
}
.list-leave-active {
  position: absolute;
}
</style>

