import React from "react";
import { NavLink } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import TopicCard from "../components/TopicCard";

const LandingPage = ({ articles, topics }) => {
  const randomArticles = articles.slice(0, 5);

  return (
    <div className="landing-page">
      <div className="landing-header">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <button className="join-btn">Join</button>

      <section className="topics">
      {topics.map((topic) => {
        return <TopicCard key={crypto.randomUUID()} topic={topic}/>
      })}
      </section>

      <div className="recommended">
        <h2>Recommended</h2>
        <NavLink to="/articles">See all Articles</NavLink>
      </div>
      
      <section className="article-scroll">
        {randomArticles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
};

export default LandingPage;
