import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import keypair from "keypair";
import data from "../static/data/data";

class ContactStore extends EventEmitter {
	constructor() {
		super();
		this.contacts = data;
	}

	getContacts() {
		return this.contacts;
	}

	getContact(id) {
		const contact = _.find(this.contacts, contact => contact.id === id);
		return contact;
	}

	createContact(fullname) {
		const key = keypair({bits:64});
		console.log(key);
		console.log(key.public);
		console.log(key.private);
		this.contacts.push({
			id: Date.now(),
			fullname: fullname,
			rsaPublic: key.public,
			rsaPrivate: key.private
		});
		this.emit("changeContacts");
	}

	deleteContact(id) {
		_.remove(this.contacts, contact => contact.id === id);
		this.emit("changeContacts");
	}

	updateContact(newContact) {
		const contact = _.find(this.contacts, contact => contact.id === newContact.id);
		contact.fullname = newContact.fullname;
		contact.email = (newContact.email !== undefined) ? newContact.email : "";
		contact.phone = (newContact.phone !== undefined) ? newContact.phone : "";
		this.emit("changeContacts");
	}

	handleActions(action) {
		switch(action.type) {
			case "CREATE_CONTACT": {
				this.createContact(action.fullname);
				break;
			}
			case "DELETE_CONTACT": {
				this.deleteContact(action.id);
				break;
			}
			case "UPDATE_CONTACT": {
				this.updateContact(action.contact);
				break;
			}
		}
	}
}

const contactStore = new ContactStore;
dispatcher.register(contactStore.handleActions.bind(contactStore));
window.dispatcher = dispatcher;

export default contactStore;