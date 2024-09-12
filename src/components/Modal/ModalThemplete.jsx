import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalBackdrop, ModalContainer } from "./Modal.styled";
import { ModalContext } from "../../contexts/ModalContext";

function ModalThemplete() {
  const { handleModal, modalContext, modal } = useContext(ModalContext);

  if (modal) {
    return ReactDOM.createPortal(
      <ModalBackdrop onClick={handleModal}>
        <ModalContainer>{modalContext}</ModalContainer>
      </ModalBackdrop>,
      document.getElementById("modal-root")
    );
  }
  return null;
}

export default ModalThemplete;
