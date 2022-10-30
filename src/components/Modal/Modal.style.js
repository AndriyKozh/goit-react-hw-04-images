import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;

  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  background-color: #fff;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
`;
