<template>
	<svg class="svg-icon" aria-hidden="true">
		<use :xlink:href="iconName" />
	</svg>
</template>

<script lang="ts" setup>
	// import { defineComponent, computed } from 'vue';
	// import PropTypes from '@/utils/PropTypes';
	const props = defineProps({
		// name: String
		name: PropTypes.string.isRequired
	});

	const iconName = computed(() => `#icon-${props.name}`);
</script>

<style lang="less">
	.svg-icon {
		width: 100%;
		height: 100%;
		fill: currentColor;
		// stroke: currentColor;
		overflow: hidden;

		&:focus {
			outline: none;
		}
	}
</style>
