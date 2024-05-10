import React from "react";
import { NavLink } from "react-router-dom";

const TopicCard = ({ topic }) => {
  
  return (
    <NavLink to={`/topics/${topic.slug}`} className="topic-card">
      {topic.slug} 📄
    </NavLink>
  );
};

export default TopicCard;