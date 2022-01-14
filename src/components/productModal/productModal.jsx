import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function productModal({ data, show, onHide }) {
    return (
			<>
				<Modal show={show} onHide={onHide}>
					<Modal.Header closeButton>
						<Modal.Title>
							{data.name === undefined ? "" : data.name.toUpperCase()}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<strong>Price:</strong>
						{data.price} EUR
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={onHide}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
}
