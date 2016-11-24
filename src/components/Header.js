import React from 'react';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.style = {
			background:'#2c3e50',
			color:'#fff'
    	}
	}

	render() {
		return (
			<div style={this.style} className="container-fluid">
				<h1>{this.props.text}</h1>
			</div>
		);
	}
}