import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';


const TopNavigation = (props) => {
  const isFavPhotoExist = props.favourites.length > 0 
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={props.topics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
    
  )
};

export default TopNavigation;
