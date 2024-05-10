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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          deleniti optio exercitationem numquam modi quo ea repellat doloribus
          facere soluta, nostrum architecto non delectus deserunt eius ut
          laudantium rem officia ex. Maiores, sapiente. Laboriosam sapiente ea
          rerum impedit! Sequi, quo minus. Ullam numquam nostrum, dolorem sunt
          ad modi perspiciatis nobis obcaecati exercitationem, debitis itaque
          quisquam quaerat accusantium? Non est vel harum molestiae dolore rem
          aperiam impedit quidem, aspernatur, doloribus tempore totam nesciunt
          voluptatibus minima iure. Facilis ullam quis dolorem iure rem ducimus
          totam sapiente nesciunt praesentium aperiam assumenda veniam ex id
          alias magnam eius, quod impedit beatae odit? Pariatur mollitia
          voluptas enim, cum a nesciunt omnis quod, atque ea excepturi
          necessitatibus beatae eum non commodi quis? In, adipisci velit at
          dicta eligendi eos necessitatibus officiis veniam soluta dolor culpa,
          dolores quia. Voluptates hic error ipsum libero iure. In odit debitis
          illum labore autem repudiandae cum, placeat omnis provident harum?
          Exercitationem?
        </p>
      </section>

      <NavLink to='/sign-up' aria-label="Sign Up" className="join-btn">
        Join the community <FontAwesomeIcon icon={faArrowTurnUp} />
      </NavLink>

      <article className="topics">
        {topics.map((topic) => {
          return <TopicCard key={crypto.randomUUID()} topic={topic} />;
        })}
      </article>

      <section className="suggested">
        <h3>Recommended</h3>
        <NavLink to="/articles">
          See all Articles <FontAwesomeIcon icon={faArrowTurnUp} />
        </NavLink>
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
