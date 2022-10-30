import styled from 'styled-components';

export const ImageGalleryBlock = styled.li`
  margin: 20px;
  width: 300px;
  height: 200px;
  border-radius: 7px;
  overflow: hidden;
`;

export const ImageGalleryImg = styled.img`
  width: 100%;
  height: 100%;
  cursor: zoom-in;

  &:hover {
    transform: scale(1.1);
    transition-duration: 250ms;
  }
`;
