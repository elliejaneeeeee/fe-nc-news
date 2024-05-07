import axios from 'axios';

const articlesAPI = axios.create({
  baseURL: "https://be-nc-news-2e46.onrender.com/api/",
});

export const fetchAllArticles = () => {
  return articlesAPI.get(`articles`)
  .then(({ data }) => {
    return data.articles;
  })
};

export const fetchAllTopics = () => {
  return articlesAPI.get(`topics`)
  .then(({ data }) => {
    return data.topics;
  })
};


export const fetchArticleById = (articleId) => {
  return articlesAPI.get(`articles/${articleId}`)
  .then(({ data }) => {
    return data.article;
  })
};

