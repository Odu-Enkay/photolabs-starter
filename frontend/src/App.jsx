import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';
import PhotoDetailModal from './components/PhotoDetailModal';
import HomeRoute from './components/HomeRoute';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const  {favourites,
    singlePhotoDetail,
    isModalOpen,
    toggleFavourite,
    handlePhotoClick,
        closeModal} =useApplicationData();
  
 /*  const [favourites, setFavourites] = useState([]);
  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); */

  /* const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      console.log('Favourite removed!');
      const currentFavourites = favourites.filter(id => id !== photoId);
      setFavourites(currentFavourites);
    } else {
      const newFavourites = [...favourites, photoId];
      setFavourites(newFavourites);
      console.log("Favourite ID added");
    }
  }; */

  
  /* const handlePhotoClick = (photo) => {
    setSinglePhotoDetail(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSinglePhotoDetail(null);
    setIsModalOpen(false);
  };
 */
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onPhotoClick={handlePhotoClick}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
      {isModalOpen && singlePhotoDetail && (
        <PhotoDetailModal
          singlePhotoDetail={singlePhotoDetail}
          onClose={closeModal}
          photos={photos}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          onPhotoClick={handlePhotoClick} 
        />
      )}
    </div>
  );
};

export default App;
