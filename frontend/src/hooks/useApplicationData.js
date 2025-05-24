import { useReducer, useEffect } from "react";

export const ACTIONS = {
  TOGGLE_FAV_PHOTO: "TOGGLE_FAV_PHOTO",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_MODAL: "CLOSE_MODAL",
};

// INITIAL STATE
const initialState = {
  favourites: [],
  selectedPhoto: null,
  isModalOpen: false,
  photoData: [],
  topicData: [],
};

// ===HELPER FUNCTION  ======
//======= Update favourites =====
const updateFavourites = (favourites, photoId) => {
  if (favourites.includes(photoId)) {
    return favourites.filter((id) => id !== photoId);
  } else {
    return [...favourites, photoId];
  }
};

//===== REDUCER FUNCTION =====
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAV_PHOTO:
      return {
        ...state,
        favourites: updateFavourites(state.favourites, action.photoId),
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.photo,
      };

    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      return {
        ...state,
        selectedPhoto: action.photo,
        isModalOpen: true,
      };

    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        selectedPhoto: null,
        isModalOpen: false,
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

//==== CUSTOM HOOK FUNCTION ====
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //==== FETCH ALL PHOTO DATA FROM API
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => {
        console.log("Fetch failed: ", error);
      });
  }, []);

  //==== FETCH ALL TOPIC DATA FROM API
  useEffect(() => {
    fetch("/api/topics")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => {
        console.log("Fetch failed: ", error);
      });
  }, []);

  //====FETCH PHOTOS BY TOPIC
  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/${topicId}/photos`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((err) => console.error("Error fetching photos by topic:", err));
  };

  // === toggle favourite ===
  const toggleFavourite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAV_PHOTO, photoId });
  };

  //==== Handle photoclick
  const handlePhotoClick = (photo) => {
    dispatch({
      type: ACTIONS.DISPLAY_PHOTO_DETAILS,
      photo,
    });
  };

  const closeModal = () => {
    dispatch({
      type: ACTIONS.CLOSE_MODAL,
    });
  };

  return {
    state,
    toggleFavourite,
    handlePhotoClick,
    closeModal,
    fetchPhotosByTopic,
  };
};

export default useApplicationData;
