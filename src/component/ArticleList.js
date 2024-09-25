import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleList = ({ articles, setAsTopArticle }) => {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} setAsTopArticle={setAsTopArticle} />
      ))}
    </div>
  );
};

export default ArticleList;
