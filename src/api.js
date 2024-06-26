import axios from 'axios';

const newsAPI = axios.create({
  baseURL: "https://be-nc-news-2e46.onrender.com/api/",
});

export const fetchAllArticles = (topic = "", sort_by = 'created_at', order = 'desc') => {
  return newsAPI.get(`articles`, {
    params: {
      topic,
      sort_by,
      order
    }
  })
  .then(({ data }) => {
    return data.articles;
  })
  .catch((err) => {
    throw err
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
  .catch((err) => {
    throw err
  })
};

export const fetchCommentsByArticle = (articleId) => {
  return newsAPI.get(`articles/${articleId}/comments`)
  .then(({ data }) => {
    const {comments} = data
    return comments
  })
};

export const updateArticleVotes = (articleId, num) => {
  return newsAPI.patch(`articles/${articleId}`, {
    inc_votes: num
  })
  .then(({ data } ) => {
    const {article} = data
    return article
  })
};

export const postComment = (articleId, comment) => {
  return newsAPI.post(`articles/${articleId}/comments`, comment)
  .then((res) => {
    return res
  })
  .catch((err) => {
    throw err
  })
}

export const deleteComment = (commentId) => {
  return newsAPI.delete(`comments/${commentId}`)
  .then((res) => {
    return res
  })
  .catch((err) => {
    throw err
  })
}

export const fetchAllUsers = () => {
  return newsAPI.get(`users`)
  .then(({ data }) => {
    return data
  })
  .catch((err) => {
    throw err
  })
}