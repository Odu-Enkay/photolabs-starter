import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import React from "react";
import "../styles/PhotoDetailsModal.scss";
import PhotoList from "../components/PhotoList";
import PhotoFavButton from "../components/PhotoFavButton";

const PhotoDetailsModal = ({
  singlePhotoDetail,
  onClose,
  photos,
  toggleFavourite,
  favourites,
  onPhotoClick,
}) => {
  if (!singlePhotoDetail) {
    return null;
  }
  
  const { id, urls, user, location, similar_photos } = singlePhotoDetail;

  //Find similar photos
  const similarPhotos = Object.values(similar_photos || {});
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      {/* Selected photo with FavButton */}
      <div className="photo-details-modal__images">
        <div
          className="photo-details-modal__image"
          style={{ position: "relative" }}
        >
          <PhotoFavButton
            photoId={id}
            favourites={favourites}
            toggleFavourite={toggleFavourite}
          />
          <img
            className="photo-details-modal__image"
            src={urls.full}
            alt="Selected"
          />
        </div>
      </div>

      {/* Photographer details */}
      <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={user.profile}
          alt={`Profile of ${user.username}`}
        />
        <div className="photo-details-modal__photographer-info">
          <div>{user.username}</div>
          <div className="photo-details-modal__photographer-location">
            {location.city}, {location.country}
          </div>
        </div>
      </div>

      {/* Similar photos */}
      {similarPhotos.length > 0 && (
        <>
          <h2 className="photo-details-modal__header">Related photos:</h2>
          <div className="photo-details-modal__images">
            <PhotoList
              photos={similarPhotos}
              toggleFavourite={toggleFavourite}
              favourites={favourites}
              onPhotoClick={onPhotoClick}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoDetailsModal;
