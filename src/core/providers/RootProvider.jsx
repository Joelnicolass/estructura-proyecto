import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { darkTheme, lightTheme } from "../themes/themes";
import ModalProvider from "../../context/ModalContext";

const RootProvider = ({ children }) => {
  return (
    <NextUIProvider theme={darkTheme}>
      <ModalProvider>
        <HelmetProvider>{children}</HelmetProvider>
      </ModalProvider>
    </NextUIProvider>
  );
};

export default RootProvider;
