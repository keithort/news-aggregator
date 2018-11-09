import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchArticles } from "../Actions/ArticlesActions";

import Articles from "./Articles";

class Home extends Component {
  componentDidMount() {
    this.props.fetchArticles("top-headlines");
  }

  render() {
    const { articles } = this.props;
    if (articles && articles.articles) {
      return (
        <>
          <h2 className="h1 border-bottom mt-4">Latest Articles</h2>
          <Articles articles={articles} />
        </>
      );
    }
    return <div>Loading...</div>;
  }
}

Home.propTypes = {
  articles: PropTypes.object.isRequired,
  fetchArticles: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(
  mapStateToProps,
  { fetchArticles }
)(Home);
