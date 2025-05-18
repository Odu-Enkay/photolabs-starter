import './App.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';
import PhotoDetailModal from './components/PhotoDetailModal';
import HomeRoute from './components/HomeRoute';

const App = () => {

  const [singlePhotoDetail, setSinglePhotoDetail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <HomeRoute photos={photos} topics={topics} onPhotoClick={handlePhotoClick} />
    {isModalOpen && singlePhotoDetail && (
        <PhotoDetailModal
        singlePhotoDetail={singlePhotoDetail}
        onClose={closeModal}
        photos={photos} 
      />
        )};
        
  </div>

  
      )
};

export default App;
