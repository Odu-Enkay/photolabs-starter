import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div>
      <img src={props.imageSource} alt="avatar_img" />
      <di>{props.id}</di>
      <div>{props.username}</div>
      <div>{props.city} {props.country}</div>
      
    </div>
    
  )
}

export default PhotoListItem;
