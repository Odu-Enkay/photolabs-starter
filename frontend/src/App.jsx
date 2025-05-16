import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {id} = sampleDataForPhotoListItem;
  const {city, country} = sampleDataForPhotoListItem.location;
  const imageSource = sampleDataForPhotoListItem.urls.regular;
  const {username, name, profile} = sampleDataForPhotoListItem.user;
  return (
    <div className="App">
      <PhotoListItem
      key={id}
      imageSource={imageSource}
      username={username}
      city={city}
      country={country} 
      profile={profile}    
      />
    </div>
  );
};

export default App;
