import React from 'react';

export default class TableItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<a href={"#/contacts/" + this.props.id} onClick={this.props.setItemDetails.bind(this, this.props.id)} 
				className="list-group-item">
			{this.props.fullname}</a>
		);
	}



}