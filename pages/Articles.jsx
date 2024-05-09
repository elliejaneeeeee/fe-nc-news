import React, { useEffect, useState } from 'react'
import ArticleCard from '../components/ArticleCard';
import { fetchAllArticles } from '../src/api';

const Articles = ({articles, setArticles}) => {
  const [sortBy, setSortBy] = useState("created_at")
  const [orderBy, setOrderBy] = useState("desc")

  const handleSortBy = (e) => {
    setSortBy(e.target.value)
  }

  const handleOrderBy = (e) => {
    setOrderBy(e.target.value)
  }

  useEffect(() => {
    fetchAllArticles("", sortBy, orderBy)
    .then((data) => {
      setArticles(data)
    });
  }, [sortBy, orderBy]);

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
    <div className='article-container'>
      {articles.map((article)  => {
        return <ArticleCard key={article.article_id} article={article}/>
      })}
    </div>
    </>
  )
}

export default Articles