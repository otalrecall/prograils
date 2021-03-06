import React from 'react';
import List from './List';
import AddButton from './AddButton';
import Detail from './Detail';

export default class Grid extends React.Component {
	constructor(props) {
		super(props);
		this.styleAside = {
			background:'#99ccff',
			color:'#fff'
    	}
    	this.styleAddButton = {
			background:'#99ffcc',
			color:'#000'
    	}
	}

	renderDetailContact() {
		if (this.props.contact) {
			return (
				<Detail 
					contact={this.props.contact}
					deleteItem={this.props.deleteItem}
					updateItem={this.props.updateItem}/>
			);
		}
	}

	render() {
		return (
			<div className="container-fluid">
				<div style={this.styleAddButton} className="row">
					<div className="col-xs-12 col-sm 3 col-md-3">
						<AddButton 
							text={this.props.addButtonText} 
							createItem={this.props.createItem}/>
					</div>
				</div>

				<section className="main row">
					<aside style={this.styleAside} className="col-xs-12 col-sm 3 col-md-3">
						<List 
							list={this.props.list}
							setItemDetails={this.props.setItemDetails}/>
					</aside>

					<article className="col-xs-12 col-sm-9 col-md-9">
						{this.renderDetailContact()}
					</article>
				</section>
			</div>
		);
	}
}