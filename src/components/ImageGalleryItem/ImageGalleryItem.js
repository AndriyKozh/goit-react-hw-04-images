import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

import { ImageGalleryBlock, ImageGalleryImg } from './ImageGallery.style';
const ImageGalleryItem = ({ webformatURL, largeImageURL, createId }) => {
  const [modalEl, setModalEl] = useState(false);

  const toggleModal = () => {
    setModalEl(modalEl => !modalEl);
  };

  return (
    <ImageGalleryBlock key={createId}>
      <ImageGalleryImg onClick={toggleModal} src={webformatURL} alt="image" />
      {modalEl && <Modal onClose={toggleModal} largeImageURL={largeImageURL} />}
    </ImageGalleryBlock>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
