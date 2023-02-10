import { useFetch } from '#imports';

type METHODS = 'GET' | 'POST' | 'PUT' | 'DELETE';
type RequestURL = (params?: any) => string;
type RequestApi = Record<
	string,
	{
		url: RequestURL;
		methods: Array<METHODS>;
	}
>;

export const requestApi: RequestApi = {
	ping: {
		url: () => `/api/ping/`,
		methods: ['GET']
	}
};

type RequestAction = (params?: any) => ReturnType<typeof useFetch>;
type RequestActions = Record<METHODS, (url: RequestURL) => RequestAction>;
const requestActions: RequestActions = {
	GET: url => params => {
		const { path, ...rest } = params ?? {};
		return useFetch(url(path), {
			method: 'GET',
			...rest
		});
	},
	POST: url => params => {
		const { path, ...rest } = params ?? {};
		return useFetch(url(path), {
			method: 'POST',
			...rest
		});
	},
	PUT: url => params => {
		const { path, ...rest } = params ?? {};
		return useFetch(url(path), {
			method: 'PUT',
			...rest
		});
	},
	DELETE: url => params => {
		const { path, ...rest } = params ?? {};
		return useFetch(url(path), {
			method: 'DELETE',
			...rest
		});
	}
};
type Requests = Record<string, RequestAction>;
function createRequests() {
	const requests: Requests = {};
	Object.entries(requestApi).forEach(([name, { url, methods }]) => {
		methods.forEach(method => {
			const key = method.toLowerCase() + name[0].toUpperCase() + name.slice(1);
			const value = requestActions[method](url);
			requests[key] = value;
		});
	});
	return requests;
}

export const api = createRequests();
