<template>
	<div>
		<a-button style="width: 200px" type="primary" @click="handleAdd">add count</a-button>
		<div class="test">{{ count }}</div>
		<!-- <NuxtWelcome /> -->
		<svg-icon class="test-icon" name="shengji_cli_icon"></svg-icon>
	</div>
</template>

<script setup lang="ts">
	import 'virtual:svg-icons-register';
	import Antd, { message } from 'ant-design-vue';
	import 'ant-design-vue/dist/antd.less';
	const nuxtApp = useNuxtApp();
	nuxtApp.vueApp.use(Antd);

	// PropTypes();
	// console.log(other);

	const counterStore = useCounterStore();
	const { count } = toRefs(counterStore);
	function handleAdd() {
		count.value++;
	}

	const { pending, refresh, data } = useLazyFetch('/api/ping/');
	watch(
		() => data.value,
		() => {
			console.log('data', data.value);
		},
		{
			immediate: true
		}
	);
</script>

<style lang="less">
	@import '@/style/reset.less';

	.test-icon {
		width: 100px;
		height: 100px;
		color: red;
	}
</style>
