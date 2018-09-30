/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue"
import { action } from "@storybook/addon-actions"

import MyButton from "../components/MyButton.vue"
import HelloWorld from "../components/HelloWorld.vue"

storiesOf("Hello World", module)
	.add("hello world", () => ({
		components: { HelloWorld },
		template: "<hello-world msg='Welcome to Your Vue.js + TypeScript App'/>",
	}))

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