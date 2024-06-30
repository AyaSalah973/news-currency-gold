import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const NewsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    navigate('/news');
    return null;
  }

  return (
    <div className="news-details">
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Published At:</strong> {article.publishedAt}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
};

export default NewsDetails;
