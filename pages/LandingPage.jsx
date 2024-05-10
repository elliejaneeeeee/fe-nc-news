import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import TopicCard from "../components/TopicCard";

const LandingPage = ({ articles, topics }) => {
  const randomArticles = articles.slice(0, 5);

  return (
    <main className="landing-page">
      <section className="landing-header">
        <h1>Where ideas connect: Join the conversation.</h1>
        <h2>HiveMind Hub</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
          impedit. Quisquam voluptatibus consequuntur, illum rerum impedit
          deleniti tenetur aut veritatis labore laborum necessitatibus maxime
          doloremque ipsum eum maiores ducimus est perferendis sit aliquid?
          Porro, quaerat alias delectus facere aliquid omnis! Exercitationem
          consequatur omnis ea explicabo. Dolores dolorem cum aliquid sapiente?
        </p>
      </section>

      <button aria-label="Sign Up" className="join-btn">Join the community <FontAwesomeIcon icon={faArrowTurnUp} /></button>

      <article className="topics">
        {topics.map((topic) => {
          return <TopicCard key={crypto.randomUUID()} topic={topic} />;
        })}
      </article>

      <section className="suggested">
        <h3>Recommended</h3>
        <NavLink to="/articles">See all Articles <FontAwesomeIcon icon={faArrowTurnUp} /></NavLink>
      </section>

      <article className="main-scroll">
        {randomArticles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </article>
    </main>
  );
};

export default LandingPage;
