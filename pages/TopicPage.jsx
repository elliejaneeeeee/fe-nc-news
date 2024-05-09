import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAllArticles } from '../src/api'
import ArticleCard from '../components/ArticleCard'
import TopicCard from '../components/TopicCard'

const TopicPage = ({ topics }) => {
    const [articlesByTopic, setArticlesByTopic] = useState([])
    const {topic} = useParams()

    useEffect(() => {
        fetchAllArticles(topic)
        .then((res) => {
            setArticlesByTopic(res)
        })
    }, [topic])

  return (
    <>
    <section className="topics">
      {topics.map((topic) => {
        return <TopicCard key={crypto.randomUUID()} topic={topic}/>
      })}
      </section>
    <section className='article-container'>
        {articlesByTopic.map((article) => {
           return <ArticleCard key={article.article_id} article={article} />
        })}
    </section>
    </>
  )
}

export default TopicPage