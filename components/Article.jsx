import { useState } from 'react'
import {updateArticleVotes} from '../src/api'
import { Navigate } from 'react-router-dom'

const SingleArticle = ({ singleArticle }) => {
  const [articleVotes, setArticlevotes] = useState(singleArticle.votes)
  const [hasLiked, setHasLiked] = useState(false)
  const [hasDisliked, setHasDisliked] = useState(false)
  const [error, setError] = useState(false)

  const handleVotes = (e) =>  {
    if (e.target.innerText === 'Like' && !hasLiked) {
      setArticlevotes((articleVotes) => articleVotes + 1)
      setHasLiked(true)
      setHasDisliked(false)
      updateArticleVotes(singleArticle.article_id, 1)
      .catch((err) => {
        setError(true)
      })
    }
    else if (e.target.innerText === 'Dislike' && !hasDisliked) {
      setArticlevotes((articleVotes) => articleVotes - 1)
      setHasDisliked(true)
      setHasLiked(false)
      updateArticleVotes(singleArticle.article_id, -1)
      .catch((err) => {
        setError(true)
      })
    }
  }

  if(error) {
    return <Navigate to="/error" />
  }

  return (
    <>
        <p className='topic-card'>{singleArticle.topic}</p>

        <div className='single-article'>
          <h2>{singleArticle.title}</h2>
          <img src={singleArticle.article_img_url} />
          <p>{singleArticle.body}</p>
          <p>{singleArticle.author}</p>
          <p>{(singleArticle.created_at).slice(0,10)}</p>
          <p>{articleVotes}</p>
          <button onClick={handleVotes}>Like</button>
          <button onClick={handleVotes}>Dislike</button>
        </div>

    </>
  )
}

export default SingleArticle