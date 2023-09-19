import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {/* loop through photos array and render some properties */}
      {props.photos.map((photo) => {
        return (
          <PhotoListItem
            key={photo.id}
            photo={photo}
            imageSource={photo.urls.regular}
            toggleFavorite={props.toggleFavorite}
            favorites={props.favorites}
            onPhotoClick={props.onPhotoClick}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;