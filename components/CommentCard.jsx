import React from 'react'

const CommentCard = ({ comment }) => {
  const randomId = Math.floor(Math.random() * 50)
  return (
    <div className='comment-card'>
        <img src={`https://i.pravatar.cc/48?img=${randomId}`} />
        <p>{comment.author}</p>
        <p className='comment-body'>{comment.body}</p>
        <p className={comment.votes < 0 ? 'votes-dislike' : 'votes-like'}>{Math.abs(comment.votes)}</p>
    </div>
  )
}

export default CommentCard