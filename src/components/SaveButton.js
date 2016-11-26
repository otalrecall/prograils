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
		this.props.updateItem(this.props.contact)
	}
}