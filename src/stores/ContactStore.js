import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class ContactStore extends EventEmitter {
	constructor() {
		super();
		this.contacts = [
			{
				id: Date.now(),
				rsaKey: 'xbvyVDX6w9lLR1R5xbpOXNdJcE9GSXHlgv5ov9ccsGak0HxborDivBNGrbCvLgbtjpn',
				fullname: 'Daniel Otal',
				email: 'otalrecall@gmail.com',
				phone: '675489312'
			},
			{
				id: Date.now()+1,
				rsaKey: 'ra3PjGViKUGiWZHp4qgCEZo6AE6SvVaT3cdU4rxakUahBI8xxzPxa0mBzFajYZOI5xaF',
				fullname: 'John Smith',
				email: 'johnsmith@gmail.com',
				phone: '643429718'
			},
			{
				id: Date.now()+2,
				rsaKey: 'ra3PjGViKUGiWZHp4qgCEZo6AE6SvVaT3cdU4rxakUahBI8xxzPxa0mBzFajYZOI5xaG',
				fullname: 'Emily Waters',
				email: 'emily567@outlook.com',
				phone: '663453871'
			},
			{
				id: Date.now()+3,
				rsaKey: 'ra3PjGViKUGiWZHp4qgCEZo6AE6SvVaT3cdU4rxakUahBI8xxzPxa0mBzFajYZOI5xaH',
				fullname: 'William Eastwood',
				email: 'william.eastwood@yahoo.com',
				phone: '654601034'
			}
		]
	}

	getContacts() {
		return this.contacts;
	}

	getContact(id) {
		const contact = _.find(this.contacts, contact => contact.id === id);
		return contact;
	}

	createContact(fullname) {
		this.contacts.push({
			id: Date.now(),
			fullname: fullname
		});
		this.emit("changeContacts");
	}

	deleteContact(id) {
		_.remove(this.contacts, contact => contact.id === id);
		this.emit("changeContacts");
	}

	updateContact(contactToUpdate) {
		let contact = _.find(this.contacts, contact => contact.id === contactToUpdate.id);
		contact = contactToUpdate;
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