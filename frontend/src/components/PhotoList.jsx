import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  // const handleAddFav = (id) => {
  //   props.addFavorite(id);
  // };

  const photoData = props.photos.map((photo) => {
  
    const isFavorite = props.isFavorite(photo.id);

    return (
      <PhotoListItem
        key={photo.id}
        id={photo.id}
        city={photo.location.city}
        country={photo.location.country}
        regular={photo.urls.regular}
        name={photo.user.name}
        profile={photo.user.profile}
        isFavorite={isFavorite}
        addFavorite={props.addFavorite}
        onClick={() => props.onClick(photo.id)}
        photoClick={props.photoClick}
      />
    );
  });

  return <ul className="photo-list">{photoData}</ul>;
};

export default PhotoList;
