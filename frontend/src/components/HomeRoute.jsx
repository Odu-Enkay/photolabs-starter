import '../styles/HomeRoute.scss'
import TopNavigation from './TopNavigationBar';  
import FavBadge from './FavBadge';
import TopicList from './TopicList';   
import PhotoList from './PhotoList';              

const HomeRoute = () => {
  return (
    <div className='home-route'>
      <nav className="top-nav-bar">
      <TopNavigation />
      <TopicList />
      </nav>
      <PhotoList /> 
    </div>
  )
}

export default HomeRoute;