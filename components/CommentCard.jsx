import React, { useState } from "react";
import { convertTime } from "../utils/convertTime";
import { deleteComment } from "../src/api";

const CommentCard = ({ comment, currentUser, setComments, setCommentDeleted, setIsError}) => {
  const randomId = Math.floor(Math.random() * 50);
  const timeStamp = convertTime(comment.created_at);

  const handleDeleteComment = (e) => {
    const response = confirm("Are you sure you want to delete your comment?");
    if (response) {
      deleteComment(comment.comment_id)
      .then((res) => {
        setComments((prevComments) => {
          return prevComments.filter((c) => c.comment_id !== comment.comment_id);
        });
        setCommentDeleted(true)
      })
      .catch((err) => {
        setCommentDeleted(false);
        setIsError(true)
      })
    }
  };

  return (
    <div className="comment-card">
        <img src={`https://i.pravatar.cc/48?img=${randomId}`} />
        <p className="grid-author">{comment.author}</p>
        <p className="grid-time">{timeStamp}</p>
        <p className="grid-body">{comment.body}</p>

        {currentUser === comment.author && (
          <button
            type="button"
            className="btn-delete grid-delete"
            onClick={handleDeleteComment}>
            Delete
          </button>
        )}

        <button className="grid-like">👍</button>
        <p className="grid-votes">{comment.votes}</p>
        <button className="grid-dislike">👎</button>
    </div>
  );
};

export default CommentCard;
