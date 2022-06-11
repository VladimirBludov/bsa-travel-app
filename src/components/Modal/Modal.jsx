import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Backdrop } from './Modal.styles';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');
const html = document.querySelector('html');

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handelKeyDownEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handelKeyDownEsc);
    html.classList.add('disable-scroll');

    return () => {
      window.removeEventListener('keydown', handelKeyDownEsc);
      html.classList.remove('disable-scroll');
    };
  }, [onClose]);

  const handelBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handelBackdropClick}>{children}</Backdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
};
