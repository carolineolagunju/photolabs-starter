import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const { state, toggleFavorite, onPhotoClick, closeModal, getPhotosByTopic } =
    useApplicationData();

  const { isModalOpen, photoSelected, favorites, photos, topics, topicPhotos } =
    state;

  return (
    <div className="App">
      {/* renders photos conditionally */}
      <HomeRoute
        photos={topicPhotos.length > 0 ? topicPhotos : photos}
        topics={topics}
        onPhotoClick={onPhotoClick}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        getPhotosByTopic={getPhotosByTopic}
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