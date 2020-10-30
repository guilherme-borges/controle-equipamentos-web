import React from 'react';
import '../styles/modal.css';

function Modal() {
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-content">
                    <h1>Modal</h1>
                </div>
                <div className="modal-footer">
                    <button className="button">Fechar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;