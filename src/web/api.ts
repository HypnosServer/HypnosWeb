export interface GET_Member {
	avatar:   string,
	username: string
}

export type GET_Members = GET_Member[]

export module API {
	export const host =
		// @ts-ignore as it is handled by Parcel.
		process.env.NODE_ENV == "development" ?
			"http://localhost:4567" :
			"/api"

	export function fetch(uri: string, method: "GET" = "GET") {
		return window.fetch(`${host}${uri}`, {
			method,
			mode: "cors"
		});
	}

	export function json(uri: string) {
		return fetch(uri).then(response => response.json());
	}
}
