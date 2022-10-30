import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import { GalleryBlock } from './ImageGallery.style';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

const ImageGallery = ({ images, handlerButton, imageAdd, isLoading }) => {
  return (
    <>
      {!isLoading ? (
        <div>
          <GalleryBlock key={images.id}>
            {images.map(({ id, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            ))}
          </GalleryBlock>

          {imageAdd.length < 12 ? (
            Notiflix.Notify.failure('Your request has not reach a goal')
          ) : (
            <Button handlerButton={handlerButton} />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

// images, handlerButton, imageAdd, isLoading
ImageGallery.propType = {
  images: PropTypes.string.isRequired,
  handlerButton: PropTypes.func.isRequired,
  imageAdd: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default ImageGallery;
