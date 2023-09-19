import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const { state, toggleFavorite, onPhotoClick, closeModal } =
    useApplicationData();

  const { isModalOpen, photoSelected, favorites, photos, topics } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onPhotoClick={onPhotoClick}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
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
