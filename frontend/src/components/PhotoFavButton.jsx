import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from 'react';

const PhotoFavButton = () => {
  const [isActive, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);
    console.log(`Favourite button clicked, isActive: ${!isActive}`);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className='photo-list__fav-icon-svg'>
        <FavIcon className='photo-list__fav-icon' selected={isActive} 
        style={{backgroundColor: isActive? 'red' : 'white'}} /> 
        </div>
      </div>
  );
};

export default PhotoFavButton;
