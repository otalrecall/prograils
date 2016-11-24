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

	render() {
		return (
			<div className="container-fluid">
				<div style={this.styleAddButton} className="row">
					<div className="col-xs-12 col-sm 4 col-md-3">
						<AddButton 
							text={this.props.addButtonText} 
							createItem={this.props.createItem}/>
					</div>
				</div>

				<section className="main row">
					<aside style={this.styleAside} className="col-xs-12 col-sm 4 col-md-3">
						<List list={this.props.list}/>
					</aside>

					<article className="col-xs-12 col-sm-8 col-md-9">
						<Detail />
					</article>
				</section>
			</div>
		);
	}
}