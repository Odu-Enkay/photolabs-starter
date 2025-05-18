import TopNavigation from './TopNavigationBar';
import PhotoList from './PhotoList';
import '../styles/HomeRoute.scss';
import { useState } from 'react';

const HomeRoute = (props) => {
  const [favourites, setFavourites] = useState([]);

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
      <PhotoList photos={props.photos} toggleFavourite={toggleFavourite} favourites={favourites}/>
      
    </div>
  );
};

export default HomeRoute;