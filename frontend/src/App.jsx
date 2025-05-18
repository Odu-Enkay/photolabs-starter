import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';
import PhotoDetailModal from './components/PhotoDetailModal';
import HomeRoute from './components/HomeRoute';

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavourite = (photoId) =>{
    if(favourites.includes(photoId)){
      console.log('favoutite removed!');
      //remove photoID from the favourite
      const currentFavourites = [...favourites].filter(id => id !== photoId)
      setFavourites(currentFavourites)
    }else{
      const newFavourites = [...favourites, photoId]
      setFavourites(newFavourites)
      console.log("Favoutite Id added")
      //setFavourites(prev=>([...prev, photoId]))
    }
  
  }


  // Function to open modal with selected photo
  const handlePhotoClick = (photo) => {
    setSinglePhotoDetail(photo);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSinglePhotoDetail(null);
    setIsModalOpen(false);
  };

 
  return (
    <div className="App">   
    <HomeRoute photos={photos} topics={topics} onPhotoClick={handlePhotoClick}  favourites={favourites}
        toggleFavourite={toggleFavourite} />
    {isModalOpen && singlePhotoDetail && (
        <PhotoDetailModal
        singlePhotoDetail={singlePhotoDetail}
        onClose={closeModal}
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        onPhotoClick={setSinglePhotoDetail}  // this updates the photo detail modal's selected photo
      />
        )};
        
  </div>

  
      )
};

export default App;
