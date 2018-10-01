/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue"
import { action } from "@storybook/addon-actions"

import MyButton from "../components/MyButton.vue"
import HelloWorld from "../components/HelloWorld.vue"
import Post from "../components/Post.vue"
import PostList from "../components/PostList.vue"

import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins ăă¤ăłăăźăăăžă

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas);
library.add(far);
library.add(fab);

Vue.component('fa', FontAwesomeIcon);

const p = {
	name: "ĺçĄăăă",
	host: "@whisperhub.net",
	isAdmin: true,
	isTopicOwner: true,
	message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	reactions: [
		{ reactionChar: "đ¤", reactionCount: 10, isMyReaction: false },
		{ reactionChar: "đ", reactionCount: 3, isMyReaction: true },
	],
	isStarred: false,
	timestamp: "ăăŁăäť",
	index: 0,
};

let ind = 0;
const posts = Array(90).fill({}).map((post) => Object.assign({}, p))

posts.forEach((v, i) => {
	v.index = i;
	v.isAdmin = v.isTopicOwner = false;
});

console.log(posts.length);

storiesOf("Post", module)
	.add("post", () => ({
		components: { Post },
		template: `<post
		name="${p.name}"
		host="${p.host}"
		:isAdmin="${p.isAdmin}"
		:isTopicOwner="${p.isTopicOwner}"
		message="${p.message}"
		:reactions='${JSON.stringify(p.reactions)}'
		:isStarred="${p.isStarred}"
		timestamp="${p.timestamp}"/>`
	}))
	.add("postlist", () => ({
		components: { PostList },
		template: `<post-list :posts='${JSON.stringify(posts)}'/>`
	}));

storiesOf("Hello world", module)
	.add("hello world", () => ({
		components: { HelloWorld },
		template: "<hello-world msg='Welcome to Your Vue.js + TypeScript App'/>",
	}));

storiesOf("Button", module)
	.add("with text", () => ({
		components: { MyButton },
		template: "<my-button @click='action'>Hello Button</my-button>",
		methods: { action: action("clicked") }
	}))
	.add("with some emoji", () => ({
		components: { MyButton },
		template: "<my-button @click='action'>😀 😎 👍 💯</my-button>",
		methods: { action: action("clicked") }
	}));

