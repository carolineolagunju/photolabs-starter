import React, {useState} from "react";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoDetailsModal.scss"
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    city,
    country,
    regular,
    name,
    profile,
    username,
    id,
    onClick,
    photoClick,
  } = props;
//() => photoClick(regular, id, name, profile, city, country)
//`photo-list__item ${isClicked ? "photo-details-modal__images" : ""}`
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(true);
    photoClick(regular, id, name, profile, city, country);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton selected={props.isFavorite} onClick={onClick} />
      <img
        src={regular}
        alt="image"
        className="photo-list__image"
        onClick={handleImageClick}
      />
      <div className="photo-list__user-details">
        <img
          src={profile}
          alt="profile-picture"
          className="photo-list__user-profile"
        />
        <div className="photo-list__user-info">
          {name}
          <div className="photo-list__user-location">
            {city},{country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
