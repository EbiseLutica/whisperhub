<template lang="pug">
	article.post
		header.stack
			h3.name {{ name }}
			aside.badge {{  }}
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Post extends Vue
{
	@Prop() name = "";
	@Prop() isAdmin = false;
	@Prop() reactions: ReactionViewModel[] = [];
	@Prop() isStarred = false;
	@Prop() time = "";
}

interface ReactionViewModel
{
	reactionChar: string;
	reactionCount: number;
	isMyReaction: boolean;
}

</script>


<style lang="sass" scoped>

</style>
