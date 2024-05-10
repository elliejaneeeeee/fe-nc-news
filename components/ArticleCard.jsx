import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";

const ArticleCard = ({ article }) => {
  return (
    <div className='article-card' aria-label={article.title}>
        <img src={article.article_img_url} />
        <Link to={`/articles/${article.article_id}`}>{article.title} <FontAwesomeIcon icon={faArrowTurnUp} size='2xs'/></Link>
        <p>{article.author}</p>
        <p>{article.votes}</p>
    </div>
  )
}

export default ArticleCard