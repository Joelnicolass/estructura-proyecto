import { Modal } from "@nextui-org/react";
import { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const intialConfig = {
    height: "400px",
    width: "400px",
    background: "white",
    color: "black",
  };

  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState(null);
  const [config, setConfig] = useState(intialConfig);

  const openModal = ({ content, config = intialConfig }) => {
    setContent(content);
    setVisible(true);
  };

  const closeModal = () => {
    setContent(null);
    setVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
      }}
    >
      <Modal
        css={{
          height: config.height,
          width: config.width,
          background: config.background,
          color: config.color,
        }}
        open={visible}
        onClose={closeModal}
      >
        {content}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModal = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  return { openModal, closeModal };
};
