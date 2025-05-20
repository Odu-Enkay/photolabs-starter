import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          toggleFavourite={props.toggleFavourite}
          favourites={props.favourites}
          onPhotoClick={props.onPhotoClick}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
