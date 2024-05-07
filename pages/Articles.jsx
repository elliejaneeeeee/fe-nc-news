import React from 'react'
import ArticleCard from '../components/ArticleCard';

const Articles = ({articles}) => {
  return (
    <div className='article-container'>
      {articles.map((article)  => {
        return <ArticleCard key={article.article_id} article={article}/>
      })}
    </div>
  )
}

export default Articles