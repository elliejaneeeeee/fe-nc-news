import React, { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { fetchArticleById } from "../src/api";
import Article from "../components/Article";
import Comments from "../components/Comments";
import { ErrorContext } from "../contexts/ErrorContext";
import LoadingScreen from "../components/LoadingScreen";

const SingleArticle = ({ currentUser }) => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isError, setIsError } = useContext(ErrorContext);

  let { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id)
      .then((data) => {
        setIsLoading(false);
        setSingleArticle(data[0]);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    setIsError(false);
    return <Navigate to="/error" />;
  }

  return (
    <>
      <Article singleArticle={singleArticle} />
      <Comments article_id={article_id} currentUser={currentUser} />
    </>
  );
};

export default SingleArticle;
