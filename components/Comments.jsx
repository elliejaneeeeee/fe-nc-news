import React, { useEffect, useState } from 'react'
import { fetchCommentsByArticle } from '../src/api'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'

const Comments = ({ article_id, currentUser }) => {
    const [comments, setComments] = useState([])
    const [commentDeleted, setCommentDeleted] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isNewComment, setIsNewComment] = useState(false)

    useEffect(() => {
        fetchCommentsByArticle(article_id)
        .then((data) => {
            setComments(data)
            setIsNewComment(false)
        })
    }, [isNewComment])

  return (
    <div className='comments-container'>
        <CommentForm article_id={article_id} currentUser={currentUser} setComments={setComments} comments={comments} setIsError={setIsError} setIsNewComment={setIsNewComment}/>
        {commentDeleted && <div className='success'>Success! Comment Deleted</div>}
        {isError && <div className='error'>Unsuccessful! An Error Occured</div>}
        {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} currentUser={currentUser} setComments={setComments} setCommentDeleted={setCommentDeleted} setIsError={setIsError}/>
        })}
    </div>
  )
}

export default Comments