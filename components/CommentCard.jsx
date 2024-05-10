import React, { useState } from "react";
import { convertTime } from "../utils/convertTime";
import { deleteComment } from "../src/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";

const CommentCard = ({
  comment,
  currentUser,
  setComments,
  setCommentDeleted,
  setIsError,
}) => {
  const randomId = Math.floor(Math.random() * 50);
  const timeStamp = convertTime(comment.created_at);

  const handleDeleteComment = (e) => {
    const response = confirm("Are you sure you want to delete your comment?");
    if (response) {
      deleteComment(comment.comment_id)
        .then((res) => {
          setComments((prevComments) => {
            return prevComments.filter(
              (c) => c.comment_id !== comment.comment_id
            );
          });
          setCommentDeleted(true);
        })
        .catch((err) => {
          setCommentDeleted(false);
          setIsError(true);
        });
    }
  };

  return (
    <main>
      <hr className="comment-divider" />

      <section className="comment-card">
        <img
          alt="An image of a user"
          src={`https://i.pravatar.cc/48?img=${randomId}`}
        />

        <p className="grid-author">{comment.author}</p>
        <p className="grid-time">{timeStamp}</p>
        <p className="grid-body">{comment.body}</p>

        {currentUser === comment.author && (
          <button
          aria-label="Delete comment"
            type="button"
            className="btn-delete grid-delete"
            onClick={handleDeleteComment}
          >
            Delete
          </button>
        )}

        <button className="grid-like" aria-label="Like comment">
          <FontAwesomeIcon icon={faHeart} />
        </button>

        <p aria-label={`${comment.votes} comment votes`} className="grid-votes">{comment.votes}</p>

        <button aria-label="dislike comment" className="grid-dislike">
          <FontAwesomeIcon icon={faHeartCrack} />
        </button>
      </section>

    </main>
  );
};

export default CommentCard;
