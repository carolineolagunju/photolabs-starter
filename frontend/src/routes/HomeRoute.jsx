import React, { useState } from "react";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = ({ photos, topics, photoClick, isFavorite, addFavorite, favorites, handleAddFav }) => {
 
  //return true if favorites array is not empty
  const isFavPhotoExist = (favorites) => favorites.length > 0;

  const handlePhotoClick = (photo, id, name, profile, city, country) => {
    photoClick(photo, id, name, profile, city, country);
  };
//return TopNavigation to render
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        isFavPhotoExist={isFavPhotoExist(favorites)}
      />
      <PhotoList
        photos={photos}
        addFavorite={addFavorite}
        isFavorite={isFavorite}
        photoClick={handlePhotoClick}
        onClick={handleAddFav}
      />
    </div>
  );
};

export default HomeRoute;
