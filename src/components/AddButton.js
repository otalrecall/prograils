import React from 'react';

export default class AddButton extends React.Component {
	constructor(props) {
		super(props);
	}

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
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