import { useState } from "react";

const useApplicationData = () => {
  const [favourites, setFavourites] = useState([]);
  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


const toggleFavourite = (photoId) => {
  if (favourites.includes(photoId)) {
    console.log('Favourite removed!');
    const currentFavourites = favourites.filter(id => id !== photoId);
    setFavourites(currentFavourites);
  } else {
    const newFavourites = [...favourites, photoId];
    setFavourites(newFavourites);
    console.log("Favourite ID added");
  }
};

const handlePhotoClick = (photo) => {
  setSinglePhotoDetail(photo);
  setIsModalOpen(true);
};

const closeModal = () => {
  setSinglePhotoDetail(null);
  setIsModalOpen(false);
};

return {favourites,
  singlePhotoDetail,
isModalOpen,
  toggleFavourite,
  handlePhotoClick,
      closeModal,
  };

}

export default useApplicationData;