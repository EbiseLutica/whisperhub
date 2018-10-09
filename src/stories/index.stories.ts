/* eslint-disable import/no-extraneous-dependencies */
/* tslint:disable:max-line-length */
import { storiesOf } from "@storybook/vue";

import Post from "../components/Post.vue";
import PostList from "../components/PostList.vue";
import VHeader from "../components/VHeader.vue";
import Window from "../components/Window.vue";
import CreateNewPost from "../components/CreateNewPost.vue";
import AiWindow from "../components/AiWindow.vue";

import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(far);
library.add(fab);

Vue.component("fa", FontAwesomeIcon);

const p = {
	name: "名無しさん",
	host: "@whisperhub.net",
	isAdmin: true,
	isTopicOwner: true,
	message: "親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）",
	reactions: [
		{ reactionChar: "🤔", reactionCount: 10, isMyReaction: false },
		{ reactionChar: "👍", reactionCount: 3, isMyReaction: true },
	],
	isStarred: false,
	timestamp: "たった今",
	index: 0,
};

const ind = 0;
const posts = Array(90).fill({}).map((post) => Object.assign({}, p));

posts.forEach((v, i) => {
	v.index = i;
	v.isAdmin = v.isTopicOwner = false;
});

storiesOf("Post", module)
	.add("post", () => ({
		components: { Post },
		template: `<post post='${JSON.stringify(p)}'/>`,
	}))
	.add("post list", () => ({
		components: { PostList },
		template: `<post-list :posts='${JSON.stringify(posts)}'/>`,
	}));

storiesOf("Header", module)
	.add("header", () => ({
		components: { VHeader },
		template: `<v-header/>`,
	}));

storiesOf("Window", module)
	.add("window", () => ({
		components: { Window },
		template: `
		<window title="New Window" width="400px" height="400px">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</window>`,
	}))
	.add("create new post window", () => ({
		components: { CreateNewPost },
		template: `<create-new-post/>`,
	}))
	.add("藍ちゃん", () => ({
		components: { AiWindow },
		template: `<ai-window/>`,
	}));
