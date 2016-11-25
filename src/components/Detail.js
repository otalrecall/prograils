import React from 'react';

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
    		isEditing: false
    	}
	}

	renderNameField() {
		if (this.state.isEditing) {
			return (
				<input className="form-control" type="text" id="name" placeholder="Enter Name" />
			);
		}
		else {
			return (
				<input className="form-control" type="text" id="name" value={this.props.name} readOnly="true" />
			);
		}
	}

	renderEmailField() {
		if (this.state.isEditing) {
			return (
				<div className="input-group">
					<input className="form-control" type="text" id="email" placeholder="Enter Email" />
					<div className="input-group-addon">@</div> 
					<input className="form-control" type="text" />
				</div>
			);
		}
		else {
			return (
				<input className="form-control" type="text" id="email" value={this.props.email} readOnly="true"/>
			);
		}
	}

	renderPhoneField() {
		if (this.state.isEditing) {
			return (
				<input className="form-control" type="text" id="phone" placeholder="Enter Phone" />
			);
		}
		else {
			return (
				<input className="form-control" type="text" id="phone" value={this.props.phone} readOnly="true"/>
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
					<label className="control-label col-sm-1" htmlFor="name">Name:</label>
					<div className="col-sm-11">
						{this.renderNameField()}
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-sm-1" htmlFor="email">Email:</label>
					<div className="col-sm-11">
						{this.renderEmailField()}
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-sm-1" htmlFor="phone">Phone:</label>
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
						<button 
							style={this.styleDefaultButton} 
							className="btn btn-danger"
							onClick={this.onDeleteClick.bind(this)}>Delete</button>
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

	onSaveClick(event) {

		onCancelClick(event);
	}

	onDeleteClick(event) {
		event.preventDefault();
	}

	onCancelClick(event) {
		event.preventDefault();
		this.styleEditButton = Object.assign({}, this.styleEditButton, {visibility:'visible'}); 
		this.styleDefaultButton = Object.assign({}, this.styleDefaultButton, {visibility:'hidden'});
		this.setState( { isEditing: false } );
	}
}