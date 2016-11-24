import React from 'react';

export default class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.styleButton = {
			marginRight: '10px'
    	}
	}

	render() {
		return (
			<form action="" className="clearfix">
				<div className="form-group">
					<input className="form-control" id="name" type="text" placeholder="Full Name" />
				</div>
				<div className="form-group">
					<input className="form-control" id="email" type="text" placeholder="Email" />
				</div>
				<div className="form-group">
					<input className="form-control" id="phone" type="text" placeholder="Phone" />
				</div>
				<div className="form-group">
						<button style={this.styleButton} className="btn btn-primary">Save</button>
						<button style={this.styleButton} className="btn btn-default">Cancel</button>
						<button className="btn btn-danger">Delete</button>
				</div>
			</form>
		);
	}
}