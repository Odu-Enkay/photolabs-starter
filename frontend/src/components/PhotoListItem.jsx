import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list__item">
      <img
        className="photo-list__image"
        src={props.imageSource}
        alt="avatar_img"
      />
      <div className="photo-list__user-details">
        <div>{props.id}</div>
        <img
          className="photo-list__user-profile"
          src={props.profile}
          alt="avatar_img"
        />
        <div className="photo-list__user-info">
          <div>{props.username}</div>
          <div className="photo-list__user-location">
            {props.city} {props.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
