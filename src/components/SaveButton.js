import React from 'react';

export default class SaveButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button
				style={this.props.styleButton} className="btn btn-primary"
				onClick={this.onSaveClick.bind(this)}>Save</button>
		);
	}

	onSaveClick(event) {
		event.preventDefault();

		const alertText = this.props.validateInput();

		// If there is an alert text, Alert is shown and item not updated
		if (alertText) {
			this.props.showAlert(alertText);
			return;
		}
		this.props.updateItem(this.props.item);
	}
}