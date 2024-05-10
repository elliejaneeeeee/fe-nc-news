import React, { useState } from "react";
import ExpandComment from "./ExpandComment";
import { postComment } from "../src/api";

const CommentForm = ({ article_id, currentUser, setComments, comments, setIsError, setIsNewComment }) => {
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
        setIsNewComment(true)
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
    <section aria-label="Comment section" className="comment-form">
      <form aria-label="Add a comment">
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
          <button aria-label="Cancel comment" type='button' onClick={() => setIsOpen(false)}>Cancel</button>
          <button aria-label="Post comment" type='submit' onClick={handleCommentPost}>Comment</button>
        </ExpandComment>
      </form>
    </section>
  );
};

export default CommentForm;
