import React from "react";

import Jumbotron from "./Jumbotron";
import Article from "./Article";

const Articles = props =>
  props.articles.articles.map(
    (article, index) =>
      index === 0 ? (
        <Jumbotron details={article} key={index} />
      ) : (
        <Article details={article} key={index} />
      )
  );

export default Articles;
