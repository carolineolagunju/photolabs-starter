import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    state,
    toggleFavorite,
    onPhotoClick,
    closeModal,
    getPhotosByTopic,
    getAllPhotos,
  } = useApplicationData();

  const { isModalOpen, photoSelected, favorites, photos, topics } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onPhotoClick={onPhotoClick}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        getPhotosByTopic={getPhotosByTopic}
        getAllPhotos={getAllPhotos}
      />

      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          photoSelected={photoSelected}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      )}
    </div>
  );
};

export default App;