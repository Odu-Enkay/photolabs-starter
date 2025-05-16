import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.photo;
  return (
    <div className="photo-list__item">
      {/* <div>{id}</div> */}
      <img className="photo-list__image" src={urls.regular} alt="avatar_img" />
      <div className="photo-list__user-details"> 
      <img className="photo-list__user-profile" src={user.profile} alt="avatar_img" />
      <div className="photo-list__user-info">
      <div>{user.username}</div>
      <div className="photo-list__user-location">{location.city} {location.country}</div>
      </div>
      
      </div>
    
    </div>
  )
}
export default PhotoListItem;
