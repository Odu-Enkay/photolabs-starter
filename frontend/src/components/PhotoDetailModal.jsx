const PhotoDetailModal = ({ isOpen, onClose, photo }) => {
  if (!isOpen || !photo) return null;

  const { urls, user, location } = photo;

  return (
    <div className="photo-details-modal" onClick={onClose}>
      <div className="photo-details-modal__content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <img src={urls.full} alt={`Photo by ${user.username}`} />
        <div className="photo-details-info">
          <p><strong>Photographer:</strong> {user.name} (@{user.username})</p>
          <p><strong>Location:</strong> {location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailModal;
  