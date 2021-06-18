import React from "react"
import Modal from "./Modal"
import "./style/DeleteBadgeModal.css"

const DeleteBadgeModal = (props) =>{
    return(
        <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}>
            <div className="DeleteBadgeModal">
                <h1>Are you sure?</h1>
                <p>You are going to delete this data...</p>
                <div>
                    <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
                    <button onClick={props.onClose} className="btn btn-warning btn-cancel text-white">Cancel</button>
                </div>
            </div>
        </Modal>
    );
}

export default DeleteBadgeModal;