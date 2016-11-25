import dispatcher from "../dispatcher";

export function createContact(fullname) {
	dispatcher.dispatch({
		type: "CREATE_CONTACT",
		fullname
	});
}

export function getContact(id) {
	dispatcher.dispatch({
		type: "GET_CONTACT",
		id
	});
}