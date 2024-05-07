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


