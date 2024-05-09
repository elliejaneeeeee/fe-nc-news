import React, { useState } from "react";
import ExpandComment from "./ExpandComment";
import { postComment } from "../src/api";

const CommentForm = ({ article_id, currentUser, setComments, comments }) => {
  const [commentInput, setCommentInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentPost = (e) => {
    e.preventDefault()
    if (commentInput === "") {
      setError(true)
      setIsOpen(true)
    }
    else {
      const newComment = {
        created_at: Date.now(),
        author: currentUser,
        username: currentUser,
        body: commentInput
      }
      setComments([newComment, ...comments])
      setCommentInput("")
      setIsOpen(false)
      setError(false)
      setSuccess(true)
      postComment(article_id, newComment)
    }
  }

  return (
    <div className="comment-form">
      <form>
        <label htmlFor="comment-body">Add a comment...</label>
        <input
          type="textarea"
          id="comment-body"
          value={commentInput}
          onChange={handleCommentInput}
          onClick={() => setIsOpen(true)}
        ></input>
        {error && <div className="error">This field is required!</div>}
        {success && <div className="success">Success!</div>}

        <ExpandComment isOpen={isOpen}>
          <button type='button' onClick={() => setIsOpen(false)}>Cancel</button>
          <button type='submit' onClick={handleCommentPost}>Comment</button>
        </ExpandComment>
      </form>
    </div>
  );
};

export default CommentForm;
