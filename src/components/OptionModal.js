import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClose} // this will escape the window if user presses esc or clicks outside
    contentLabel="Selected Options"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClose}>close</button>
    </Modal>
)



export default OptionModal