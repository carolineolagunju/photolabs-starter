import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

//The topic navigationbar displays the photolabs logo, FavIcon and tpics
const TopNavigation = ({
  topics,
  isFavPhotoExist,
  getPhotosByTopic,
  getAllPhotos,
}) => {
  return (
    <div className="top-nav-bar">
      <span onClick={getAllPhotos} className="top-nav-bar__logo">
        PhotoLabs
      </span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <div>

      <FavBadge isFavPhotoExist={isFavPhotoExist} />
      <span className="light-switch">💡</span>
      </div>
    </div>
  );
};

export default TopNavigation;