import React from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.photo;

  return (
    <div className="photo-list__item">
      {/* <div>{id}</div> */}
      <PhotoFavButton toggleFavourite={props.toggleFavourite} photoId={id} favourites={props.favourites}/>
      <img className="photo-list__image" src={urls.regular} alt={`Photo by ${user.username}`} onClick={props.onPhotoClick}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt={`Profile of ${user.username}`} />
        <div className="photo-list__user-info">
          <div>{user.username}</div>
          <div className="photo-list__user-location">{location.city} {location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;