import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import PhotoList from "components/PhotoList";

// Note: Rendering a single component to build components in isolation
const App = () => {
  //set state for modal to false as its default state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayPicture, setDisplayPicture] = useState(null);

  const [favorites, setFavorites] = useState([]);
  const addFavorite = (id) => {
    //if id in arr, remove, else add
    if (favorites.includes(id)) {
      return setFavorites(favorites.filter((photoId) => photoId !== id));
    }
    //add the photo id to the array
    setFavorites([...favorites, id]);
  };

  const isFavorite = (id) => {
    //return true if id is in the array
    return favorites.includes(id);
  };

  const handleAddFav = (id) => {
    addFavorite(id);
  };

  //function to open modal when photo is clicked
  const photoClick = (photo, id, name, profile, city, country) => {
    setIsModalOpen(true);
    setDisplayPicture({photo, id, name, profile, city, country});

  };

  
  //function to close modal when x is clicked
  const closeModal = () => {
    setIsModalOpen(false);
  };
 
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} photoClick={photoClick} isFavorite={isFavorite} addFavorite={addFavorite} favorites={favorites} handleAddFav={handleAddFav}/>
      {isModalOpen && (
        <PhotoDetailsModal closeModal={closeModal} photo={displayPicture} photoList={photos} isFavorite={isFavorite} addFavorite={addFavorite} onClick={handleAddFav}/>
      )}
    </div>
  );
};

export default App;
