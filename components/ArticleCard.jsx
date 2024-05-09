import React from 'react'
import { Link } from 'react-router-dom'

const ArticleCard = ({ article }) => {
  return (
    <div className='article-card'>
        <img src={article.article_img_url} />
        <Link to={`/articles/${article.article_id}`} >{article.title}</Link>
        <p>{article.author}</p>
        <p>{(article.created_at).slice(0,10)}</p>
        <p>{article.votes}</p>
    </div>
  )
}

export default ArticleCard