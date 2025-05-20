import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ 
  photos, topics, favourites, toggleFavourite, onPhotoClick, onTopicClick}) => {
 
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites} onTopicClick={onTopicClick}/>
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite}  onPhotoClick={onPhotoClick} />    
      
    </div>
  );
};

export default HomeRoute;