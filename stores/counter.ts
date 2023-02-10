import { defineStore } from 'pinia';
export const useCounterStore = defineStore('useCounterStore', () => {
	const count = ref(0);

	return {
		count
	};
});
