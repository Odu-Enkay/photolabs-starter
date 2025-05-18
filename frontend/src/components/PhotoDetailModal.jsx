import React from "react";
import "../styles/PhotoDetailsModal.scss";
import PhotoList from "./PhotoList";

const PhotoDetailModal = ({ singlePhotoDetail, onClose, photos }) => {
  if (!singlePhotoDetail) {
    return null;
  }
  const { urls, user, location } = singlePhotoDetail;

  //console.log("Modal photo details:", singlePhotoDetail);
  //console.log('user.profile:', singlePhotoDetail.user?.profile);

  const similarPhotos = photos.filter(
    (photo) =>
      photo.id !== singlePhotoDetail.id && photo.location.city === location.city
  );

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          {" "}
          X
        </button>
      </div>

      <div className="photo-details-modal__images">
        <img
          className="photo-details-modal__image"
          src={urls.full}
          alt="Full size"
        />
      </div>
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

      {similarPhotos.length > 0 && (
        <>
          <h2 className="photo-details-modal__header">Similar photos:</h2>
          <div className="photo-details-modal__images">
            <PhotoList
              photos={similarPhotos}
              toggleFavourite={() => {}}
              favourites={[]}
              onPhotoClick={() => {}}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoDetailModal;
