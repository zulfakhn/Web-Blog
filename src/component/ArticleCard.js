import React from 'react';

const ArticleCard = ({ article, setAsTopArticle }) => {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p>{article.content.substring(0, 100)}...</p>
      <button onClick={() => setAsTopArticle(article.id)}>
        {article.isTop ? "Top Blog" : "Set as Top Blog"}
      </button>
    </div>
  );
};

export default ArticleCard;
