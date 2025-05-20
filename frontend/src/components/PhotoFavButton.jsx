import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { useState } from "react";
import FavBadge from "./FavBadge";

const PhotoFavButton = (props) => {
  function handleClick() {
    props.toggleFavourite(props.photoId);
  }

  function isActive() {
    return props.favourites.includes(props.photoId);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          className="photo-list__fav-icon"
          selected={isActive()}
          style={{ backgroundColor: isActive() ? "red" : "white" }}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;
