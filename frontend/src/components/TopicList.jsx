import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

//List of topics on the navbar
const TopicList = (props) => {
  const topicData = props.topics.map((topic) => {
    return (
      <TopicListItem
        title={topic.title}
        key={topic.id}
        getPhotosByTopic={() => props.getPhotosByTopic(topic.id)}
      />
    );
  });

  return <div className="top-nav-bar__topic-list">{topicData}</div>;
};

export default TopicList;