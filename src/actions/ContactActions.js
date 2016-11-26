import dispatcher from "../dispatcher";

export function createContact(fullname) {
	dispatcher.dispatch({
		type: "CREATE_CONTACT",
		fullname
	});
}

export function deleteContact(id) {
	dispatcher.dispatch({
		type: "DELETE_CONTACT",
		id
	});
}

export function updateContact(contact) {
	dispatcher.dispatch({
		type: "UPDATE_CONTACT",
		contact
	});
}