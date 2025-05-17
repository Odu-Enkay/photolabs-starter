import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';


const TopNavigation = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <FavBadge />
    </div>
    
  )
};

export default TopNavigation;
