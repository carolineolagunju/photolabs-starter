import React, { useState } from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({
  closeModal,
  photo,
  photoList,
  addFavorite,
  isFavorite,
  onClick,
}) => {
  const photosObj = photoList.find((pic) => pic.id === photo.id);
  const similarPhotos = [];
  if (photosObj) {
    for (const obj in photosObj.similar_photos) {
      similarPhotos.push(photosObj.similar_photos[obj]);
    }
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={closeModal} />
      </button>
      <PhotoFavButton selected={isFavorite} />
      <img
        className="photo-details-modal__images"
        key={photo.id}
        src={photo.photo}
        alt="large image"
      />
      <div className="photo-list__user-details">
        <img
          src={photo.profile}
          alt="profile picture"
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          {photo.name}
          <div className="photo-list__user-location">
            {photo.city}, {photo.country}
          </div>
        </div>
      </div>
    <h3 className="photo-details-modal__header">Similar Photos</h3>
      <PhotoList
        photos={similarPhotos}
        addFavorite={addFavorite}
        isFavorite={isFavorite}
        onClick={onClick}
      />
    </div>
  );
};

export default PhotoDetailsModal;
