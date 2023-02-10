import { createTypes, VueTypesInterface } from 'vue-types';

export const PropTypes = createTypes({
	func: undefined,
	bool: undefined,
	string: undefined,
	number: undefined,
	array: undefined,
	object: undefined
}) as VueTypesInterface;
