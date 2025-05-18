import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';
import { useState } from 'react';
import PhotoDetailModal from './PhotoDetailModal';

const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // 👈 add this
  const [isModalOpen, setIsModalOpen] = useState(false);    // 👈 and this

    // function to open the modal
    const openModal = (photo) => {
      setSelectedPhoto(photo);
      setIsModalOpen(true);
    };
  
    // function to close the modal
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedPhoto(null);
    };
  

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

  return (
    <div className="home-route">
      <TopNavigation topics={props.topics} favourites={favourites}/>
      <PhotoList photos={props.photos} toggleFavourite={toggleFavourite} favourites={favourites}  onPhotoClick={openModal}/>

      {isModalOpen && selectedPhoto && (
        <PhotoDetailModal
          photo={selectedPhoto}
          onClose={closeModal}
        />
      )}     
      
    </div>
  );
};

export default HomeRoute;