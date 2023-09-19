import React from "react";
import "../styles/TopicListItem.scss";

//List of photo topics
const TopicListItem = (props) => {
  const { title, getPhotosByTopic } = props;
  return (
    <div className="topic-list__item">
      <span onClick={getPhotosByTopic}>{title}</span>
    </div>
  );
};

export default TopicListItem;