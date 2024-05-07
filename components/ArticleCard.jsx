import React from 'react'

const ArticleCard = ({ article }) => {
  return (
    <div className='article-card'>
        <img src={article.article_img_url} />
        <p>{article.title}</p>
    </div>
  )
}

export default ArticleCard