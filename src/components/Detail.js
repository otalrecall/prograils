import React from 'react';
import DeleteButton from './DeleteButton';

export default class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.styleDefaultButton = {
			marginRight: '10px',
			visibility: 'hidden'
    	}
    	this.styleEditButton = {
    		marginTop: '10px',
    		marginRight: '15px',
			visibility: 'visible'
    	}

    	this.state = {
    		isEditing: false,
    		fullname: null,
    		phone: null,
    		localPartEmail: null,
    		domainEmail: null
    	}
	}

	componentWillReceiveProps(nextProps) {
		this.styleEditButton = Object.assign({}, this.styleEditButton, {visibility:'visible'}); 
		this.styleDefaultButton = Object.assign({}, this.styleDefaultButton, {visibility:'hidden'});
		this.setState({
			isEditing: false,
			fullname: nextProps.contact.fullname,
    		phone: nextProps.contact.phone,
    		localPartEmail: this.getLocalPartEmail(nextProps.contact.email),
    		domainEmail: this.getDomainEmail(nextProps.contact.email)
		})
	}

	getLocalPartEmail(email) {
		if (email) {
			const emailArray = email.split("@");
			if (emailArray.length == 2) {
				return emailArray[0];
			}
		}
	}

	getDomainEmail(email) {
		if (email) {
			const emailArray = email.split("@");
			if (emailArray.length== 2) {
				return emailArray[1];
			}
		}
	}

	handleNameChange(event) {
    	this.setState({
    		fullname: event.target.value
    	});
    }

    handleDomainEmailChange(event) {
    	this.setState({
    		domainEmail: event.target.value
    	});
    }

    handleLocalPartEmailChange(event) {
    	this.setState({
    		localPartEmail: event.target.value
    	});
    }

    handlePhoneChange(event) {
    	this.setState({
    		phone: event.target.value
    	});
    }

	renderNameField() {
		if (this.state.isEditing) {
			return (
				<input className="form-control" type="text" onChange={this.handleNameChange.bind(this)}
					value={this.state.fullname} placeholder="Enter Name" 
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
						value={this.state.localPartEmail} placeholder="Enter Email" />
					<div className="input-group-addon">@</div> 
					<input className="form-control" onChange={this.handleDomainEmailChange.bind(this)}
						value={this.state.domainEmail} type="text" />
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
					value={this.state.phone} placeholder="Enter Phone" />
			);
		}
		else {
			return (
				<input className="form-control" type="text" value={this.props.contact.phone} readOnly="true"/>
			);
		}
	}

	render() {
		if(this.state.fullname) {
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
							<button 
								style={this.styleDefaultButton} 
								className="btn btn-primary"
								onClick={this.onSaveClick.bind(this)}>Save</button>
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
		else return null;
	}

	onEditClick(event) {
		event.preventDefault();
		this.styleEditButton = Object.assign({}, this.styleEditButton, {visibility:'hidden'}); 
		this.styleDefaultButton = Object.assign({}, this.styleDefaultButton, {visibility:'visible'}); 
		this.setState( { isEditing: true } );
	}

	onSaveClick(event) {
		onCancelClick(event);
	}

	onCancelClick(event) {
		event.preventDefault();
		this.styleEditButton = Object.assign({}, this.styleEditButton, {visibility:'visible'}); 
		this.styleDefaultButton = Object.assign({}, this.styleDefaultButton, {visibility:'hidden'});
		this.setState( { isEditing: false } );
	}
}