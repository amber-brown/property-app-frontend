import { PropsWithChildren } from "react";
import "./modal.css";

interface ModalProps {
  onClose: () => void;
}

const Modal = ({ children, onClose }: PropsWithChildren<ModalProps>) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-button" onClick={() => onClose()}>
          <span className="close">close</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
