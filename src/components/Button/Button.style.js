import styled from 'styled-components';

export const ButonLoad = styled.button`
  height: 50px;
  width: 150px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  background-color: aqua;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: blueviolet;
    color: #fff;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
