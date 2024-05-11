import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Articles from "../pages/Articles";
import LandingPage from "../pages/LandingPage";
import SingleArticle from "../pages/SingleArticle";
import ErrorPage from "../pages/ErrorPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import LoadingScreen from "../components/LoadingScreen";

import { fetchAllArticles, fetchAllTopics } from "./api";
import TopicPage from "../pages/TopicPage";
import { ErrorProvider } from "../contexts/ErrorContext";

function App() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    setIsLoading(true)
    fetchAllArticles()
    .then((data) => {
      setIsLoading(false)
      setArticles(data);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true)
    fetchAllTopics()
    .then((data) => {
      setIsLoading(false)
      setTopics(data);
    });
  }, []);

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <ErrorProvider value={isError}>
      <div className="app">
        <NavBar currentUser={currentUser}/>

        <Routes>
          <Route path="/" element={<LandingPage articles={articles} topics={topics} />} />
          <Route path="/articles" element={<Articles articles={articles} setArticles={setArticles}/>} />
          <Route path="/articles/:article_id" element={<SingleArticle currentUser={currentUser} />} />
          <Route path="/sign-in" element={<SignIn currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route path="/sign-up" element={<SignUp currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route path="/topics/:topic" element={<TopicPage topics={topics}/>} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </div>
    </ErrorProvider>
  );
}

export default App;
