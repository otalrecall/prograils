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
			contacts: ContactStore.getContacts()
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

	render() {
		return (
			<div>
				<Header text="Address Book"/>
				<Grid 
					addButtonText={"Add Contact"}
					createItem={this.createContact.bind(this)}
					list={this.state.contacts}/>
			</div>
		);
	}

	createContact(name) {
		ContactActions.createContact(name);
	}
}