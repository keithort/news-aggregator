import React from "react";
import { css } from "emotion";

const Jumbotron = props => {
  const { description, title, url, urlToImage } = props.details;
  return (
    <article className="jumbotron mt-4 mb-4 ml-1 mr-1 p-2 p-md-3 text-white rounded bg-dark row">
      <div className="col-md-6 px-0">
        <h2 className="h2 font-italic">{title}</h2>
        <p className="lead my-3">{description}</p>
        <p className="lead mb-0">
          <a href={url} className="text-white font-weight-bold">
            Continue reading...
          </a>
        </p>
      </div>
      <div className="col-md-6">
        <img
          src={urlToImage}
          alt={title}
          className={css({ height: "auto", width: "100%" })}
        />
      </div>
    </article>
  );
};

export default Jumbotron;
