import React from 'react';

export default class TableItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href="#" className="list-group-item">
			{this.props.fullname}</a>
		);
	}
}