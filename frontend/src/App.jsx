import "./App.scss";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import { useState } from "react";
import PhotoDetailModal from "./components/PhotoDetailModal";
import HomeRoute from "./components/HomeRoute";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const { state, toggleFavourite, handlePhotoClick, closeModal } =
    useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onPhotoClick={handlePhotoClick}
        favourites={state.favourites}
        toggleFavourite={toggleFavourite}
      />

      {state.isModalOpen && state.selectedPhoto && (
        <PhotoDetailModal
          singlePhotoDetail={state.selectedPhoto}
          onClose={closeModal}
          photos={photos}
          favourites={state.favourites}
          toggleFavourite={toggleFavourite}
          onPhotoClick={handlePhotoClick}
        />
      )}
    </div>
  );
};

export default App;
