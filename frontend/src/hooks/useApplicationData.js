import { useState } from "react";

const useApplicationData = () => {
  const [favourites, setFavourites] = useState([]);
  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

// === TOGGLE FAVOURITE=====
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

const toggleFavourite = (favourites, photoId) => {
  let updatedFavourites;
  if (favourites.includes(photoId)) {
    console.log('Favourite removed!');
    updatedFavourites = favourites.filter(id => id !== photoId);
  } else {
    updatedFavourites = [...favourites, photoId];
    console.log("Favourite ID added");
  }
  setFavourites(updatedFavourites);
  return updatedFavourites;
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

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_SELECTED_PHOTO: 'SET_SELECTED_PHOTO'
};

function reducer(state, action) {
  let updatedFavourites;

  switch (action.type) {

    case ACTIONS.FAV_PHOTO_ADDED:
      updatedFavourites = toggleFavourite(state.favourites, action.photoId);
      return {
        ...state,
        favourites: updatedFavourites
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      updatedFavourites = toggleFavourite(state.favourites, action.photoId);
      return {
        ...state,
        favourites: updatedFavourites
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.photos
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.topics
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.photo
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        selectedPhoto: action.photo,
        isModalOpen: true
      };

    case ACTIONS.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.photo,
        isModalOpen: true
      };

    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        selectedPhoto: null,
        isModalOpen: false
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


export default useApplicationData;

