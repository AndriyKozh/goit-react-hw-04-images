// 30453708-4bc301c6df3fbfbb2df0be580

import { useEffect, useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

const KEY_API = '30453708-4bc301c6df3fbfbb2df0be580';
const API_URL = 'https://pixabay.com/api/';

export const App = () => {
  const [images, setImage] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(null);
  const [query, setQuery] = useState('');
  const [imageAdd, setimageAdd] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    if (e) {
      setPage(1);
      setQuery(e.target.elements.query.value);
      setImage([]);
      e.target.reset();
    }
  };

  function handlerButton() {
    setPage(prevPage => prevPage + 1);
    setIsLoading(true);
  }

  // useEffect(() => {
  //   console.log(page);
  //   console.log(query);
  //   console.log('Fech data');
  // }, [page, query]);

  useEffect(() => {
    fetch(
      `${API_URL}?q=${query}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(image => {
        setImage([...images, ...image.hits]);
        setimageAdd(image.hits);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [page, query]);

  if (error) {
    return <h1>Error:Communication with the server is lost</h1>;
  }

  return (
    <div
      style={{
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar searchImage={handleSubmit} />

      {!query ? (
        <h1>Enter the name of the picture</h1>
      ) : (
        <ImageGallery
          isLoading={isLoading}
          imageAdd={imageAdd}
          images={images}
          handlerButton={handlerButton}
        />
      )}
    </div>
  );
};
