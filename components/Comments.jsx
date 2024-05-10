import React, { useEffect, useState } from 'react'
import { fetchCommentsByArticle } from '../src/api'
import CommentCard from './CommentCard'
import CommentForm from './CommentForm'

const Comments = ({ article_id, currentUser }) => {
    const [comments, setComments] = useState([])
    const [commentDeleted, setCommentDeleted] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isNewComment, setIsNewComment] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        fetchCommentsByArticle(article_id)
        .then((data) => {
            setComments(data)
            setIsNewComment(false)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsError(true)
        })
    }, [isNewComment])

    if (isLoading) return <p>Loading...</p>

    const checkComments = () => {
        if (comments.length > 0 && isError) {
            return true
        }
    }
    
  return (
    <div className='comments-container'>
        <CommentForm article_id={article_id} currentUser={currentUser} setComments={setComments} comments={comments} setIsError={setIsError} setIsNewComment={setIsNewComment}/>

        {commentDeleted && <div className='success'>Success! Comment Deleted</div>}
        {checkComments() && <div className='error'>Unsuccessful! An Error Occured</div>}
        {comments.length === 0 && <div>No comments found! Check back later. </div>}

        {comments.reverse().map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} currentUser={currentUser} setComments={setComments} setCommentDeleted={setCommentDeleted} setIsError={setIsError}/>
        })}
    </div>
  )
}

export default Comments