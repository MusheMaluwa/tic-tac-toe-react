import React, { createContext } from "react";
import { useModal } from "../hooks/useModal";
import ModalThemplete from "../components/Modal/ModalThemplete";

// Create the context with default values
export const ModalContext = createContext({});

// Create a functional component to provide the modal context
export function ModalContextProvider({ children }) {
  // Invoke the useModal hook
  const { modal, modalContent, handleModal } = useModal();

  return (
    <ModalContext.Provider value={{ modal, modalContent, handleModal }}>
      <ModalThemplete />
      {children}
    </ModalContext.Provider>
  );
}
