import React, { useEffect, useState } from 'react'
import { fetchCommentsByArticle } from '../src/api'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'

const Comments = ({ article_id, currentUser }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchCommentsByArticle(article_id)
        .then((data) => {
            setComments(data)
        })
    }, [])


  return (
    <div className='comments-container'>
        <CommentForm article_id={article_id} currentUser={currentUser} setComments={setComments} comments={comments}/>
        {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />
        })}
    </div>
  )
}

export default Comments