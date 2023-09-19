import React from "react";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import TopicList from "./TopicList";

//The topic navigationbar displays the photolabs logo, FavIcon and tpics
const TopNavigation = ({ topics, isFavPhotoExist, getPhotosByTopic }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} getPhotosByTopic={getPhotosByTopic} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} />
    </div>
  );
};

export default TopNavigation;