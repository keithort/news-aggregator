import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchSectionArticles } from "../Actions/ArticlesActions";

import Articles from "./Articles";

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSectionArticles(this.props.type);
  }

  render() {
    const { articles, type } = this.props;
    if (articles && articles.articles) {
      return (
        <>
          <h2 className="h1 border-bottom mt-4">{type} Articles</h2>
          <Articles articles={articles} />
        </>
      );
    }
    return <div>Loading...</div>;
  }
}

Feed.propTypes = {
  articles: PropTypes.object.isRequired,
  fetchSectionArticles: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(
  mapStateToProps,
  { fetchSectionArticles }
)(Feed);
