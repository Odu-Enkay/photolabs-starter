import React from "react";
import "../styles/PhotoDetailsModal.scss";
import PhotoList from "./PhotoList";
import PhotoFavButton from "./PhotoFavButton";

const PhotoDetailModal = ({
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

  const { id, urls, user, location } = singlePhotoDetail;

  // Find similar photos based on location (excluding the selected photo)
  const similarPhotos = photos.filter(
    (photo) =>
      photo.id !== singlePhotoDetail.id &&
      photo.location.city === location.city
  );

  return (
    <div className="photo-details-modal">
      {/* Close button */}
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          X
        </button>
      </div>

      {/* Selected photo with FavButton */}
      <div className="photo-details-modal__images">
        <div className="photo-details-modal__image-container" style={{ position: "relative" }}>
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
          <h2 className="photo-details-modal__header">Similar photos:</h2>
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

export default PhotoDetailModal;
