import React from "react";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoDetailsModal.scss";
import PhotoFavButton from "./PhotoFavButton";


//renders list of photos
const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <div>
        <PhotoFavButton
          toggleFavorite={props.toggleFavorite}
          id={props.photo.id}
          favorites={props.favorites}
        />
        <img
          src={props.imageSource}
          alt="image"
          className="photo-list__image"
          onClick={() => props.onPhotoClick(props.photo.id)}
        />
      </div>
      <div className="photo-list__user-details">
        <img
          src={props.photo.user.profile}
          alt="profile-picture"
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          {props.photo.user.name}
          <div className="photo-list__user-location">
            {props.photo.location.city},{props.photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
