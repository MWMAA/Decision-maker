import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.SelectedOption}
        onRequestClose={props.handleClear}
        contentLabel='Selected Option'
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option!</h3>
        {props.SelectedOption && <p className="modal__body">{props.SelectedOption}</p>}
        <button className='btn' onClick={props.handleClear}>Done</button>
    </Modal>
)

export default OptionModal
