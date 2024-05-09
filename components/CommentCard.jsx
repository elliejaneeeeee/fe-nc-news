import React, { useState } from 'react'
import { convertTime } from '../utils/convertTime';

const CommentCard = ({ comment }) => {
  const randomId = Math.floor(Math.random() * 50)

  const timeStamp = convertTime(comment.created_at)


  return (
    <div className='comment-card' >
        <img src={`https://i.pravatar.cc/48?img=${randomId}`} />
        <p>{comment.author}</p>
        <p className='comment-time'>{timeStamp}</p>
        <p className='comment-body'>{comment.body}</p>
        <button>👍</button>
        <p className='votes'>{comment.votes}</p>
        <button>👎</button>
    </div>
  )
}

export default CommentCard