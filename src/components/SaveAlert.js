import React from 'react';

export default class SaveAlert extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="alert alert-danger" style={this.props.styleAlert}>
				  <strong>Error!</strong> {this.props.text}
			</div>
		);
	}
}