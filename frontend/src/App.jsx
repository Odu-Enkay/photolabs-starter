import PhotoListItem from './components/PhotoListItem';
import './App.scss';/* 
import PhotoFavButton from './components/PhotoFavButton';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopicListItem from './components/TopicListItem';
import TopNavigation from './components/TopNavigationBar'; */
import HomeRoute from './components/HomeRoute';


const App = () => {
  /* const {id} = sampleDataForPhotoListItem;
  const {city, country} = sampleDataForPhotoListItem.location;
  const imageSource = sampleDataForPhotoListItem.urls.regular;
  const {username, name, profile} = sampleDataForPhotoListItem.user; */
  
 /*  const photos = new Array(3).fill(sampleDataForPhotoListItem); */

  return (
    <div className="App">   
        <HomeRoute />      
  </div>
      )
};

export default App;
