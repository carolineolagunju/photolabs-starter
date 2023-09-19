import React from "react";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  onPhotoClick,
  toggleFavorite,
  favorites,
  getPhotosByTopic,
}) => {
  //displays top navigation and list of photos
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={favorites.length > 0}
        getPhotosByTopic={getPhotosByTopic}
      />
      <PhotoList
        photos={photos}
        onPhotoClick={onPhotoClick}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default HomeRoute;