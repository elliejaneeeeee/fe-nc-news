import { useState, useContext } from "react";
import { updateArticleVotes } from "../src/api";
import { Navigate, NavLink } from "react-router-dom";
import { ErrorContext } from "../contexts/ErrorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";

const SingleArticle = ({ singleArticle }) => {
  const [articleVotes, setArticlevotes] = useState(singleArticle.votes);
  const [activeBtn, setActiveBtn] = useState("");
  const { isError, setIsError } = useContext(ErrorContext);

  const handleVotes = (reaction) => {
    if (activeBtn === "") {
      if (reaction === "like") {
        setActiveBtn("like");
        setArticlevotes((articleVotes) => articleVotes + 1);
        updateArticleVotes(singleArticle.article_id, 1).catch((err) => {
          setError(true);
        });
      } else if (reaction === "dislike") {
        setActiveBtn("dislike");
        setArticlevotes((articleVotes) => articleVotes - 1);
        updateArticleVotes(singleArticle.article_id, -1).catch((err) => {
          setError(true);
        });
      }
    }
    if (activeBtn === "like") {
      setActiveBtn("");
      setArticlevotes((articleVotes) => articleVotes - 1);
      updateArticleVotes(singleArticle.article_id, -1).catch((err) => {
        setError(true);
      });
    } else if (activeBtn === "dislike") {
      setActiveBtn("");
      setArticlevotes((articleVotes) => articleVotes + 1);
      updateArticleVotes(singleArticle.article_id, 1).catch((err) => {
        setError(true);
      });
    }
  };

  if (isError) {
    setIsError(false);
    return <Navigate to="/error" />;
  }

  return (
    <main>
      <NavLink to={`/topics/${singleArticle.topic}`} className="topic-card">
        {singleArticle.topic}
      </NavLink>

      <section className="single-article">
        <h2>{singleArticle.title}</h2>
        <img src={singleArticle.article_img_url} alt={`An image related to ${singleArticle.topic}`}/>
        <p>{singleArticle.body}</p>
        
        <article className="user-info">
          <p>{singleArticle.author}</p>
          <p>{singleArticle.created_at.slice(0, 10)}</p>
        </article>

        <article aria-label="Interact with article" className="article-votes">
          <button
            aria-label="like"
            className={activeBtn === "like" ? "btn-active" : "btn"}
            onClick={() => handleVotes("like")}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <p aria-label={`${articleVotes} comment votes`}>{articleVotes}</p>
          <button
            aria-label="dislike"
            className={activeBtn === "dislike" ? "btn-active" : "btn"}
            onClick={() => handleVotes("dislike")}
          >
            <FontAwesomeIcon icon={faHeartCrack} />
          </button>
        </article>
      </section>
    </main>
  );
};

export default SingleArticle;
