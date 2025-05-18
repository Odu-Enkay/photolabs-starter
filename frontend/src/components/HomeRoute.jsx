import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';
import { useState } from 'react';
import PhotoDetailModal from './PhotoDetailModal';

const HomeRoute = ({ photos, topics, favourites, toggleFavourite, onPhotoClick }) => {
 

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites}/>
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite}  onPhotoClick={onPhotoClick} />    
      
    </div>
  );
};

export default HomeRoute;