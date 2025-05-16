import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoFavButton from './components/PhotoFavButton';
import PhotoList from './components/PhotoList';


// Note: Rendering a single component to build components in isolation
const App = () => {
  /* const {id} = sampleDataForPhotoListItem;
  const {city, country} = sampleDataForPhotoListItem.location;
  const imageSource = sampleDataForPhotoListItem.urls.regular;
  const {username, name, profile} = sampleDataForPhotoListItem.user; */
  
 /*  const photos = new Array(3).fill(sampleDataForPhotoListItem); */

  return (
    <div className="App">
   <PhotoList />
  </div>
      )
};

export default App;
