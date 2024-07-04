import React from 'react';
import Modal from 'react-modal';
import '../css/modal.css'; // Ajoutez du style pour la modal

Modal.setAppElement('#root'); // Assurez-vous que l'élément principal de l'application est défini

const ConfirmModal = ({ isOpen, onRequestClose, onConfirm, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmation Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <h2>Confirmation</h2>
        <p>{message}</p>
        <div className="button-group">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onRequestClose}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;