import _ from 'lodash';
import React from 'react';
import ListItem from './ListItem';

export default class Table extends React.Component {
	renderItems() {
		const props = _.omit(this.props, 'list');
		return _.map(this.props.list, (elem, index) => <ListItem key={index} 
			{...elem} {...props} />);
	}

	render() {
		return (
			<div className="list-group">
			  {this.renderItems()}
			</div>
		);
	}
}