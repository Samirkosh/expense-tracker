import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const Modal = ({ children, onclose, isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <StyledModalContainer onClick={onclose}>
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </StyledModalContainer>,
    document.getElementById("modal")
  );
};

const StyledModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #3131318b;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  padding: 30px;
  background: #ad9be9;
  color: #40005d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;
