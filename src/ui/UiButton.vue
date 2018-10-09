<template lang="pug">
	button(@click="$emit('click', $event)", :class="{ primary: mode === 'primary', secondary: mode === 'secondary', success: mode === 'success', warning: mode === 'warning', danger: mode === 'danger',  }")
		slot
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
@Component({})
export default class UiButton extends Vue {
	@Prop() private mode: string;
}
</script>

<style lang="scss" scoped>
button {
		width: 6rem;
		height: 2rem;
		color: #fafafa;
		font-size: 1.2rem;
		border: none;
		box-shadow: 0 0 0.7rem black;

		&:hover {
			box-shadow: 0 0 1.4rem black;
		}
		&:active {
			box-shadow: 0 0 0.4rem black;
		}

		&:disabled {
			background: #888 !important;
			box-shadow: none;
		}

		&.primary {
			background: #2196F3;
		}

		&.secondary {
			background: #607D8B;
		}

		&.success {
			background: #8BC34A;
		}

		&.warning {
			background: #FFC107;
		}

		&.danger {
			background: #f44336;
		}

		transition: all 0.2s ease;
	}
</style>
