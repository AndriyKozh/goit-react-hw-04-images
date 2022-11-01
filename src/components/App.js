// 30453708-4bc301c6df3fbfbb2df0be580

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { Report } from 'notiflix/build/notiflix-report-aio';
import Notiflix from 'notiflix';
import Button from './Button/Button';

const KEY_API = '30453708-4bc301c6df3fbfbb2df0be580';
const API_URL = 'https://pixabay.com/api/';
// let idComponents = uuidv4()

export const App = () => {
  const [images, setImage] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(null);
  const [query, setQuery] = useState('');
  const [imageAdd, setimageAdd] = useState([]);
  const [createId, setCreatId] = useState('');

  console.log(imageAdd);

  const handleSubmit = e => {
    e.preventDefault();

    if (e) {
      setPage(1);
      setQuery(e.target.elements.query.value);
      setImage([]);
      setCreatId(uuidv4());
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
        setImage(prevImages => [...prevImages, ...image.hits]);
        setimageAdd(image.hits);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [page, query, createId]);

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
        Report.info('Info', 'enter the name of the picture', 'Okay')
      ) : (
        <ImageGallery
          createId={createId}
          isLoading={isLoading}
          images={images}
          handlerButton={handlerButton}
        />
      )}

      {imageAdd.length < 12 ? (
        <h1>This is all we found for your request</h1>
      ) : (
        <Button handlerButton={handlerButton} />
      )}
    </div>
  );
};
