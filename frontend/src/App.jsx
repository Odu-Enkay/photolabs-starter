import "./App.scss";
import PhotoDetailModal from "./routes/PhotoDetailsModal.jsx";
import HomeRoute from './routes/HomeRoute.jsx'
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    state,
    toggleFavourite,
    handlePhotoClick,
    closeModal,
    fetchPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        onPhotoClick={handlePhotoClick}
        onTopicClick={fetchPhotosByTopic}
        favourites={state.favourites}
        toggleFavourite={toggleFavourite}
      />

      {state.isModalOpen && state.selectedPhoto && (
        <PhotoDetailModal
          singlePhotoDetail={state.selectedPhoto}
          onClose={closeModal}
          photos={state.photoData}
          favourites={state.favourites}
          toggleFavourite={toggleFavourite}
          onPhotoClick={handlePhotoClick}
        />
      )}
    </div>
  );
};

export default App;
