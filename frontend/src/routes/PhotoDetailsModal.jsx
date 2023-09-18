import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

//function that handles items to be displayed on the modal once a picture is clicked
const PhotoDetailsModal = ({
  closeModal,
  photoSelected,
  toggleFavorite,
  favorites,
}) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={closeModal} />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          toggleFavorite={toggleFavorite}
          favorites={favorites}
          id={photoSelected.id}
        />
        <img
          className="photo-details-modal__image"
          key={photoSelected.id}
          src={photoSelected.urls.full}
          alt="large image"
        />

        <div className="photo-details-modal__photographer-details ">
          <img
            className="photo-details-modal__photographer-profile"
            src={photoSelected.user.profile}
          />
          <div className="photo-details-modal__photographer-info">
            {photoSelected.user.name}
            <div className="photo-details-modal__photographer-location">
              {photoSelected.location.city},{photoSelected.location.country}
            </div>
          </div>
        </div>


        <h3 className="photo-details-modal__header">Similar Photos</h3>
        <div className="photo-details-modal__images">
          {
            <PhotoList
              photos={Object.values(photoSelected.similar_photos)}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;