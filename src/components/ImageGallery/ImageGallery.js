import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryBlock } from './ImageGallery.style';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
// import Notiflix from 'notiflix';
// import { Report } from 'notiflix/build/notiflix-report-aio';

const ImageGallery = ({ images, isLoading, createId }) => {
  return (
    <>
      {!isLoading ? (
        <div>
          <GalleryBlock>
            {images.map(({ webformatURL, largeImageURL }, index) => (
              <ImageGalleryItem
                key={index}
                createId={createId}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            ))}
          </GalleryBlock>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

// images, handlerButton, imageAdd, isLoading
ImageGallery.propType = {
  images: PropTypes.array.isRequired,
  handlerButton: PropTypes.func.isRequired,
  imageAdd: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  createId: PropTypes.string.isRequired,
};
export default ImageGallery;
