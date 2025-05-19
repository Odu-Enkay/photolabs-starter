import { useReducer } from "react";

export const ACTIONS = {
  TOGGLE_FAV_PHOTO: 'TOGGLE_FAV_PHOTO',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL'
};

// INITIAL STATE
const initialState = {
  favourites: [],
  selectedPhoto: null,
  isModalOpen: false,
  photos: [],
  topics: []
};

// ===HELPER FUNCTION ======
const updateFavourites = (favourites, photoId) => {
  if (favourites.includes(photoId)) {
    console.log('Favourite removed!');
    return favourites.filter(id => id !== photoId);
  } else {
    console.log("Favourite ID added");
    return [...favourites, photoId];
  }
};

//=== toggle Favourite Icon
/* const toggleFavourite = (favourites, photoId) => {
  let updatedFavourites;
  if (favourites.includes(photoId)) {ß
    console.log('Favourite removed!');
    updatedFavourites = favourites.filter(id => id !== photoId);
  } else {
    updatedFavourites = [...favourites, photoId];
    console.log("Favourite ID added");
  }
  setFavourites(updatedFavourites);
  return updatedFavourites;
}; */

//==== handle the Fav icon clicks
/* const handlePhotoClick = (photo) => {
  setSinglePhotoDetail(photo);
  setIsModalOpen(true);
};

const closeModal = () => {
  setSinglePhotoDetail(null);
  setIsModalOpen(false);
}; */

//===== REDUCER FUNCTION =====
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAV_PHOTO:
      return {
        ...state,
        favourites: updateFavourites(state.favourites, action.photoId)
      };


    /* case ACTIONS.FAV_PHOTO_ADDED:
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
      }; */

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

    /* case ACTIONS.SET_SELECTED_PHOTO:
      return {
        ...state,
        selectedPhoto: action.photo,
        isModalOpen: true
      }; */

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

//==== CUSTOM HOOK FUNCTION ====
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV_PHOTO, photoId });
    console.log("favourites")

    };
  

  const handlePhotoClick = (photo) => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      photo
    });
  };

  const closeModal = () => {
    dispatch({
      type: ACTIONS.CLOSE_MODAL
    });
  };

   return {
      state,
      toggleFavourite,
      handlePhotoClick,
      closeModal
    }; 
  }

export default useApplicationData;