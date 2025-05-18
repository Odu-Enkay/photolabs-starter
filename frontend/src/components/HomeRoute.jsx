import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';
import { useState } from 'react';
import PhotoDetailModal from './PhotoDetailModal';

const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedPhoto, setSelectedPhoto] = useState(null);

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

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favourites={favourites}/>
      <PhotoList photos={props.photos} toggleFavourite={toggleFavourite} favourites={favourites}/>
      <PhotoDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        photo={selectedPhoto} onPhotoClick={openModal}
      />
      
    </div>
  );
};

export default HomeRoute;