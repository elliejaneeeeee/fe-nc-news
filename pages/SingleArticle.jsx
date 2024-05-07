import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchArticleById } from '../src/api'
import Article from '../components/Article'
import TopicCard from '../components/TopicCard'

const SingleArticle = () => {
  const [SingleArticle, setSingleArticle] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  let { article_id } = useParams()

  useEffect(() => {
    setIsLoading(true)
    fetchArticleById(article_id)
    .then((data) => {
      setIsLoading(false)
      setSingleArticle(data[0])
    })
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Article SingleArticle={SingleArticle}/>
  )
}

export default SingleArticle