import React from 'react';

export default class AddButton extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)} className="input-group" >
				<input type="text" ref="addInput" className="form-control" />
				    <span className="input-group-btn">
				    	<button className="btn btn-default">{this.props.text}</button>
				  	</span>
			</form>
		);
	}

    handleCreate(event) {
        event.preventDefault();

        const addInput = this.refs.addInput;
        const text = addInput.value;

        if (!text) {
            return;
        }

        this.props.createItem(text);
        this.refs.addInput.value = '';
    }
}