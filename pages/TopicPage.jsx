import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllArticles } from "../src/api";
import ArticleCard from "../components/ArticleCard";
import TopicCard from "../components/TopicCard";

const TopicPage = ({ topics }) => {
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, setOrderBy] = useState("desc");
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const { topic } = useParams();

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderBy = (e) => {
    setOrderBy(e.target.value);
  };

  useEffect(() => {
    fetchAllArticles(topic, sortBy, orderBy).then((res) => {
      setArticlesByTopic(res);
    });
  }, [topic, sortBy, orderBy]);

  return (
    <>
      <div className="options-bar">
        <label htmlFor="sort">Sort By: </label>
        <select id="sort" onChange={handleSortBy}>
          <option value="created_at">New</option>
          <option value="comment_count">Hot</option>
          <option value="votes">Highest Rated</option>
        </select>

        <label htmlFor="order">Order By: </label>
        <select id="order" onChange={handleOrderBy}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      <section className="topics">
        {topics.map((topic) => {
          return <TopicCard key={crypto.randomUUID()} topic={topic} />;
        })}
      </section>
      <section className="article-container">
        {articlesByTopic.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </>
  );
};

export default TopicPage;
