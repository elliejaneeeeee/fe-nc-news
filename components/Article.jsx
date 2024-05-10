import { useState, useContext } from 'react'
import {updateArticleVotes} from '../src/api'
import { Navigate } from 'react-router-dom'
import { ErrorContext } from '../contexts/ErrorContext'

const SingleArticle = ({ singleArticle }) => {
  const [articleVotes, setArticlevotes] = useState(singleArticle.votes)
  const [activeBtn, setActiveBtn] = useState("")
  const {isError, setIsError} = useContext(ErrorContext)


  const handleVotes = (reaction) => {
    if (activeBtn === "") {
      if (reaction === 'like') {
        setActiveBtn('like')
        setArticlevotes((articleVotes) => articleVotes + 1)
        updateArticleVotes(singleArticle.article_id, 1)
        .catch((err) => {
          setError(true)
        })
      }
      else if (reaction === 'dislike') {
        setActiveBtn('dislike')
        setArticlevotes((articleVotes) => articleVotes - 1)
        updateArticleVotes(singleArticle.article_id, -1)
        .catch((err) => {
          setError(true)
        })
      }
    }
    if (activeBtn === 'like') {
      setActiveBtn("")
      setArticlevotes((articleVotes) => articleVotes - 1)
      updateArticleVotes(singleArticle.article_id, -1)
      .catch((err) => {
        setError(true)
      })
    }
    else if (activeBtn === 'dislike') {
      setActiveBtn("")
      setArticlevotes((articleVotes) => articleVotes + 1)
      updateArticleVotes(singleArticle.article_id, 1)
      .catch((err) => {
        setError(true)
      })
    }
  }

  if(isError) {
    setIsError(false)
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
          <button className={activeBtn === 'like' ? 'btn-active' : 'btn'} onClick={() => handleVotes('like')}>Like</button>
          <button className={activeBtn === 'dislike' ? 'btn-active' : 'btn'} onClick={() => handleVotes('dislike')}>Dislike</button>
        </div>

    </>
  )
}

export default SingleArticle