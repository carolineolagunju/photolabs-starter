import React from "react";
import "../styles/TopicListItem.scss";

//List of photo topics
const TopicListItem = (props) => {
  const { slug, title } = props;
  return (
    <div className="topic-list__item">
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
