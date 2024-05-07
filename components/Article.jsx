import React from 'react'

const SingleArticle = ({ SingleArticle }) => {
  return (
    <>
        <p className='topic-card'>{SingleArticle.topic}</p>

        <div className='single-article'>
          <h2>{SingleArticle.title}</h2>
          <img src={SingleArticle.article_img_url} />
          <p>{SingleArticle.body}</p>
        </div>

        <p>{SingleArticle.author}</p>
    </>
  )
}

export default SingleArticle