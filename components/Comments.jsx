import React, { useEffect, useState } from 'react'
import { fetchCommentsByArticle } from '../src/api'
import CommentCard from './CommentCard'

const Comments = ({ article_id }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchCommentsByArticle(article_id)
        .then((data) => {
            setComments(data)
        })
    }, [])

  return (
    <div className='comments-container'>
        {comments.map((comment) => {
            return <CommentCard comment={comment} />
        })}
    </div>
  )
}

export default Comments