import styled from 'styled-components';

export const InputBlock = styled.div`
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 500;
`;

export const SearchbarForm = styled.form`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    border: none;
  }
`;

export const SearchbarInput = styled.input`
  width: 300px;
  height: 40px;
  border: transparent;
  background-color: aqua;
  border-bottom: 1px solid #000;
  padding: 0 10px 0 10px;
`;

export const SearchbarButton = styled.button`
  height: 40px;
  width: 100px;
  margin-left: 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: blueviolet;
    color: #fff;
  }
`;
