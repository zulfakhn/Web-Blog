import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import articleData from './articleData.json'
import Home from './pages/Home'
import ArticleList from './component/ArticleList'
import ArticleData from './component/ArticleData'
import Header from './component/Header'

function App() {
  const [articles, setArticle] = useState(articleData);

  const setAsTopArticle = (id) => {
    const updateArticles = articles.map((article) =>
      article.id === id ? {...article, isTop: true } :{ ...article, isTop: false }
    );
    setArticle(updateArticles);
  };


  return (
    <Router>
      <div className="main-content">
          <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article-list" element={<ArticleList articles={articles} setAsTopArticle={setAsTopArticle}/>} />
        <Route path="/articles/:id" element={<ArticleData articles={articles} />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
