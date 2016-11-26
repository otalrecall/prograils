import React from 'react';
import DeleteButton from './DeleteButton';
import SaveButton from './SaveButton';

export default class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.styleDefaultButton = {
			marginRight: '10px',
			visibility: 'hidden'
    	};
    	this.styleEditButton = {
    		marginTop: '10px',
    		marginRight: '15px',
			visibility: 'visible'
    	};

    	this.state = {
    		isEditing: false,
    		contact: Object.assign({}, this.props.contact)
    	};
	}

	componentWillReceiveProps(nextProps) {
		console.log("receiving new props");
		this.styleEditButton = Object.assign({}, this.styleEditButton, {visibility:'visible'}); 
		this.styleDefaultButton = Object.assign({}, this.styleDefaultButton, {visibility:'hidden'});
		this.setState({
			isEditing: false,
			contact: Object.assign({}, nextProps.contact)
		})
	}

	getLocalPartEmail(contact) {
		if (contact && "email" in contact) {
			const emailArray = contact.email.split("@");
			if (emailArray.length == 2) {
				return emailArray[0];
			}
		}
	}

	getDomainEmail(contact) {
		if (contact && "email" in contact) {
			const emailArray = contact.email.split("@");
			if (emailArray.length== 2) {
				return emailArray[1];
			}
		}
	}

	handleNameChange(event) {
		let contact = this.state.contact;
		contact.fullname = event.target.value;
    	this.setState({
    		contact: contact
    	});
    }

    handleDomainEmailChange(event) {
    	let contact = this.state.contact;
    	const localPartEmail = this.getLocalPartEmail(contact); 
		contact.email = localPartEmail + "@" + event.target.value;
    	this.setState({
    		contact: contact
    	});
    }

    handleLocalPartEmailChange(event) {
    	let contact = this.state.contact;
    	const domainEmail = this.getDomainEmail(contact); 
		contact.email = event.target.value + "@" + domainEmail;
    	this.setState({
    		contact: contact
    	});
    }

    handlePhoneChange(event) {
		let contact = this.state.contact;
		contact.phone = event.target.value;
    	this.setState({
    		contact: contact
    	});
    }

	renderNameField() {
		if (this.state.isEditing) {
			return (
				<input className="form-control" type="text" onChange={this.handleNameChange.bind(this)}
					value={this.state.contact.fullname} placeholder="Enter Name" 
					ref="editNameInput" />
			);
		}
		else {
			return (
				<input className="form-control" type="text" value={this.props.contact.fullname} readOnly="true" />
			);
		}
	}

	renderEmailField() {
		if (this.state.isEditing) {
			return (
				<div className="input-group">
					<input className="form-control" type="text" onChange={this.handleLocalPartEmailChange.bind(this)}
						value={this.getLocalPartEmail(this.state.contact)} placeholder="Enter Email" />
					<div className="input-group-addon">@</div> 
					<input className="form-control" onChange={this.handleDomainEmailChange.bind(this)}
						value={this.getDomainEmail(this.state.contact)} type="text" />
				</div>
			);
		}
		else {
			return (
				<input className="form-control" type="text" value={this.props.contact.email} readOnly="true"/>
			);
		}
	}

	renderPhoneField() {
		if (this.state.isEditing) {
			return (
				<input className="form-control" type="text" onChange={this.handlePhoneChange.bind(this)}
					value={this.state.contact.phone} placeholder="Enter Phone" />
			);
		}
		else {
			return (
				<input className="form-control" type="text" value={this.props.contact.phone} readOnly="true"/>
			);
		}
	}

	render() {
		return (
			<form className="form-horizontal">
				<div className="form-group">
					<button 
						style={this.styleEditButton} 
						className="btn btn-default pull-right"
						onClick={this.onEditClick.bind(this)}>Edit</button>
				</div>
				<div className="form-group">
					<label className="control-label col-sm-1">Name:</label>
					<div className="col-sm-11">
						{this.renderNameField()}
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-sm-1">Email:</label>
					<div className="col-sm-11">
						{this.renderEmailField()}
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-sm-1">Phone:</label>
					<div className="col-sm-11">
						{this.renderPhoneField()}
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-1 col-sm-11">
						<SaveButton 
							styleButton={this.styleDefaultButton}
							updateItem={this.props.updateItem}
							item={this.state.contact}/>
						<button 
							style={this.styleDefaultButton} 
							className="btn btn-default"
							onClick={this.onCancelClick.bind(this)}>Cancel</button>
						<DeleteButton 
							idItem={this.props.contact.id}
							styleButton={this.styleDefaultButton}
							deleteItem={this.props.deleteItem}/>
					</div>
				</div>
			</form>
		);
	}

	onEditClick(event) {
		event.preventDefault();
		this.styleEditButton = Object.assign({}, this.styleEditButton, {visibility:'hidden'}); 
		this.styleDefaultButton = Object.assign({}, this.styleDefaultButton, {visibility:'visible'}); 
		this.setState( { isEditing: true } );
	}

	onCancelClick(event) {
		event.preventDefault();
		this.styleEditButton = Object.assign({}, this.styleEditButton, {visibility:'visible'}); 
		this.styleDefaultButton = Object.assign({}, this.styleDefaultButton, {visibility:'hidden'});
		this.setState({ 
			isEditing: false,
			contact: Object.assign({}, this.props.contact)
		});
	}
}