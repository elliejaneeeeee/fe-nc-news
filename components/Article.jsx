import React from 'react'

const SingleArticle = ({ singleArticle }) => {
  return (
    <>
        <p className='topic-card'>{singleArticle.topic}</p>

        <div className='single-article'>
          <h2>{singleArticle.title}</h2>
          <img src={singleArticle.article_img_url} />
          <p>{singleArticle.body}</p>
          <p>{singleArticle.author}</p>
        </div>

    </>
  )
}

export default SingleArticle