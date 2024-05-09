import axios from 'axios';

const newsAPI = axios.create({
  baseURL: "https://be-nc-news-2e46.onrender.com/api/",
});

export const fetchAllArticles = () => {
  return newsAPI.get(`articles`)
  .then(({ data }) => {
    return data.articles;
  })
};

export const fetchAllTopics = () => {
  return newsAPI.get(`topics`)
  .then(({ data }) => {
    return data.topics;
  })
};

export const fetchArticleById = (articleId) => {
  return newsAPI.get(`articles/${articleId}`)
  .then(({ data }) => {
    return data.article;
  })
};

export const fetchCommentsByArticle = (article_id) => {
  return newsAPI.get(`articles/${article_id}/comments`)
  .then(({ data }) => {
    const {comments} = data
    return comments
  })
};

export const updateArticleVotes = (article_id, num) => {
  return newsAPI.patch(`articles/${article_id}`, {
    inc_votes: num
  })
  .then(({ data } ) => {
    const {article} = data
    return article
  })
};

export const postComment = (article_id, comment) => {
  return newsAPI.post(`articles/${article_id}/comments`, comment)
  .then((res) => {
    return res
  })
}