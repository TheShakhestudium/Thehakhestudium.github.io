import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

export default function Modal({ open, onClose, children }) {
  return (
    <ReactModal
      isOpen={open}
      onRequestClose={onClose}
      className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4 p-8 outline-none relative"
      overlayClassName="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      shouldCloseOnOverlayClick
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gold text-2xl font-bold focus:outline-none"
        aria-label="Cerrar"
      >×</button>
      {children}
    </ReactModal>
  );
}