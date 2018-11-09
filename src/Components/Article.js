import React from "react";
import styled from "react-emotion";

const Img = styled("img")`
  height: auto;
  max-width: 350px;
  width: 100%;
`;

const Article = props => {
  const { description, title, url, urlToImage } = props.details;
  return (
    <article>
      <div className="card flex-md-row mb-4 shadow-sm h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <h3 className="mb-0">
            <a className="text-dark" href={url}>
              {title}
            </a>
          </h3>
          <p className="card-text mb-auto mt-1">{description}</p>
          <a href={url}>Continue reading</a>
        </div>
        <div className="card-img text-right">
          {urlToImage ? (
            <Img alt={title} src={urlToImage} className="card-img-right" />
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default Article;
