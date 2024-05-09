import React, { useState } from "react";
import ExpandComment from "./ExpandComment";
import { postComment } from "../src/api";

const CommentForm = ({ article_id, currentUser, setComments, comments, setIsError }) => {
  const [commentInput, setCommentInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleCommentInput = (e) => {
    setCommentInput(e.target.value);
  };

  const handleCommentPost = (e) => {
    e.preventDefault()
    if (commentInput === "") {
      setTypeError(true)
      setIsOpen(true)
    }
    else {
      const newComment = {
        created_at: Date.now(),
        author: currentUser,
        username: currentUser,
        body: commentInput
      }
      
      postComment(article_id, newComment)
      .then((res) => {
        setSuccess(true)
        setComments([newComment, ...comments])
      })
      .catch((err) => {
        setIsError(true)
      })

      setCommentInput("")
      setIsOpen(false)
      setTypeError(false)
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
        {typeError && <div className="error">This field is required!</div>}
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
