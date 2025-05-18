import PhotoListItem from './components/PhotoListItem';
import './App.scss';/* 
import PhotoFavButton from './components/PhotoFavButton';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopicListItem from './components/TopicListItem';
import TopNavigation from './components/TopNavigationBar'; */
import HomeRoute from './components/HomeRoute';
/* import mockPhotoData from './mocks/photos';
import mockTopicData from './mocks/topics'; */
import photos from './mocks/photos';
import topics from './mocks/topics';
import { useState } from 'react';
import FavBadge from './components/FavBadge';
import FavIcon from './components/FavIcon';






const App = () => {
  /* const {id} = sampleDataForPhotoListItem;
  const {city, country} = sampleDataForPhotoListItem.location;
  const imageSource = sampleDataForPhotoListItem.urls.regular;
  const {username, name, profile} = sampleDataForPhotoListItem.user; */
  
 /*  const photos = new Array(3).fill(sampleDataForPhotoListItem); */
 
  return (
    <div className="App">   
    <HomeRoute photos={photos} topics={topics} />
        {/* <HomeRoute photos={mockPhotoData} topics={mockTopicData} />   */} 
  </div>

  
      )
};

export default App;
