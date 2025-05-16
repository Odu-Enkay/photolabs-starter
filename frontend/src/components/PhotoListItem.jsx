import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div>
      <img src={props.imageSource} alt="avatar_img" />
      <div>{props.id}</div>
      <img src={props.profile} alt="avatar_img" />
      <div>{props.username}</div>
      <div>{props.city} {props.country}</div>
      
    </div>
    
  )
}

export default PhotoListItem;
