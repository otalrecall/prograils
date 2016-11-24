import dispatcher from "../dispatcher";

export function createContact(fullname) {
	dispatcher.dispatch({
		type: "CREATE_CONTACT",
		fullname
	});
}