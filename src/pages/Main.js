import React from 'react';
import ContactStore from '../stores/ContactStore';
import Header from '../components/Header';
import Grid from '../components/Grid';
import * as ContactActions from 'actions/ContactActions';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.getContacts = this.getContacts.bind(this);
		this.state = {
			contacts: ContactStore.getContacts(),
			currentContact: null
		};
	}

	componentWillMount() {
		ContactStore.on("changeContacts", this.getContacts);
	}

	componentWillUnmount() {
		ContactStore.removeListener("changeContacts", this.getContacts);
	}

	getContacts() {
		this.setState({
			contacts: ContactStore.getContacts()
		});
	}

	setContactDetails(id) {
		this.setState({
			currentContact: ContactStore.getContact(id)
		});
	}

	render() {
		return (
			<div>
				<Header text="Address Book"/>
				<Grid 
					contact={this.state.currentContact}
					addButtonText={"Add Contact"}
					createItem={this.createContact.bind(this)}
					deleteItem={this.deleteContact.bind(this)}
					setItemDetails={this.setContactDetails.bind(this)}
					list={this.state.contacts}/>
			</div>
		);
	}

	createContact(name) {
		ContactActions.createContact(name);
	}

	deleteContact(id) {
		ContactActions.deleteContact(id);
		this.setState({
			currentContact: null
		})
	}
}