import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalOverlay, ModalBlock, ModalImg } from './Modal.style';

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', onCloseEscape);
    return () => window.removeEventListener('keydown', onCloseEscape);
  });

  function onCloseEscape(ev) {
    if (ev.code === 'Escape') {
      onClose();
    }
  }

  const closeBackdrop = ev => {
    if (ev.currentTarget === ev.target) {
      onClose();
    }
  };
  return (
    <ModalOverlay onClick={closeBackdrop}>
      <ModalBlock>{<ModalImg src={largeImageURL} />}</ModalBlock>
    </ModalOverlay>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
