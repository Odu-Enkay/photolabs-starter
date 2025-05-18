import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailModal = ({ photo, onClose }) => {
  const { urls, user, location } = photo;

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          X
        </button>
      </div>
      <div className="photo-details-modal__images">
        <img
          className="photo-details-modal__image"
          src={urls.full}
          alt={`Full view of ${user.username}'s photo`}
        />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={user.profile}
            alt={`${user.username}'s profile`}
          />
          <div className="photo-details-modal__photographer-info">
            <div>{user.username}</div>
            <div className="photo-details-modal__photographer-location">
              {location.city}, {location.country}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailModal;
