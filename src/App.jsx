import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Articles from '../pages/Articles'
import LandingPage from '../pages/LandingPage'

import { fetchAllArticles } from "./api";

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchAllArticles()
    .then((data) => {
      setArticles(data)
    })
  }, [])

  return (
    <div className="app">
      <NavBar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<Articles articles={articles}/>} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
