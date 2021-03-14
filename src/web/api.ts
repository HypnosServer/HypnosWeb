import React from "react";

export interface GET_Member {
	avatar:   string,
	username: string
}

export interface GET_Server {
	name:   string,
	online: boolean
}

export module API {
	export const host =
		// @ts-ignore as it is handled by Parcel.
		process.env.NODE_ENV == "development" ?
			"http://localhost:4567" :
			"/api"

	export function fetch(uri: string, method: "GET" = "GET") {
		return window.fetch(`${host}${uri}`, {
			method,
			mode: "cors",

			// LITERALLY SPENT 3 HOURS ON THIS FUCKING THING
			// The server/nginx will send a 403 Forbidden response code
			// if the request doesn't include this header, for NO
			// FUCKING REASON, i'm literally so heated right now. fuck this shit
			referrerPolicy: "no-referrer"
		});
	}

	export function json(uri: string) {
		return fetch(uri).then(response => response.json());
	}
}
