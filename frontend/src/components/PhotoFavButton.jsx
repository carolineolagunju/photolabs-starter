import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const onToggleFavoriteClick = () => {
    props.toggleFavorite(props.id);
  };
  //setting selected to true if the photo id exists in the favorites array
  const selected = props.favorites.includes(props.id);
  return (
    <div className="photo-list__fav-icon" onClick={onToggleFavoriteClick}>
      <div className="photo-list__fav-icon-svg">
        {<FavIcon selected={selected} />}
      </div>
    </div>
  );
}

export default PhotoFavButton;