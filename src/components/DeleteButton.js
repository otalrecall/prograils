import React from 'react';
import DeleteModal from './DeleteModal';

export default class DeleteButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			showModal: false
		}
	}

	render() {
		return (
			<span>
				<button 
					style={this.props.styleButton} className="btn btn-danger" 
					onClick={this.onDeleteClick.bind(this)}>Delete</button>
					<DeleteModal 
						showModal={this.state.showModal}
						onCloseModal={this.onCloseModal.bind(this)}
						idItem={this.props.idItem}
						deleteItem={this.props.deleteItem}/>
			</span>
		);
	}

	onCloseModal() {
		this.setState({
			showModal: false
    	});
	}

	onDeleteClick(event) {
		event.preventDefault();
		this.setState({
			showModal: true
    	});
	}
}