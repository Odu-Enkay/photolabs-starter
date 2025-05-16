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
  /* const {id} = sampleDataForPhotoListItem;
  const {city, country} = sampleDataForPhotoListItem.location;
  const imageSource = sampleDataForPhotoListItem.urls.regular;
  const {username, name, profile} = sampleDataForPhotoListItem.user; */
  
  const photos = new Array(3); // Create an array of length 3 (initially empty)

  // Populate the 'photos' array with your data.  Crucially, do this *before* mapping.
  for (let i = 0; i < photos.length; i++) {
    photos[i] = {...sampleDataForPhotoListItem, 
      id: i + 1, // Set a unique ID (1, 2, 3)
    };
  }
  return (
    <div className="App">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default App;
