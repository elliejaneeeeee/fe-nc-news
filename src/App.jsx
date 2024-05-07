import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Articles from "../pages/Articles";
import LandingPage from "../pages/LandingPage";
import SingleArticle from "../pages/SingleArticle";

import { fetchAllArticles, fetchAllTopics } from "./api";

function App() {
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

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
    return <p>Loading...</p>
  }

  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage articles={articles} topics={topics} />} />
        <Route path="/articles" element={<Articles articles={articles} />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
