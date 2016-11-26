import React from 'react';
import { Modal } from 'react-bootstrap';

export default class DeleteModal extends React.Component {
	constructor(props) {
		super(props);
	}

  	render() {
	    return (
	    	<div>
		        <Modal show={this.props.showModal} onHide={this.props.onCloseModal}>
		            <Modal.Header closeButton>
						<Modal.Title>Warning!</Modal.Title>
		            </Modal.Header>
		            <Modal.Body>
			            <p>Are you sure you want to delete this contact?</p>
			        </Modal.Body>
		            <Modal.Footer>
		            	<button className="btn btn-default" style={{alignRight:"20px"}} 
		            		onClick={this.props.onCloseModal}>Cancel</button>
		            	<button className="btn btn-danger"  
		            		onClick={this.onDeleteClick.bind(this)}>Delete</button>
		            </Modal.Footer>
		        </Modal>
	        </div>
	    );
	}

	onDeleteClick() {
		this.props.onCloseModal();
		this.props.deleteItem(this.props.idItem);
	}
}