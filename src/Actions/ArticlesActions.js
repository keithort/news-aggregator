import axios from "axios";

import { FETCH_ARTICLES, FETCH_SECTION_ARTICLES } from "./types";

export const fetchArticles = type => async dispatch => {
  const res = await axios.get(
    `https://newsapi.org/v2/${type}?country=us&apiKey=908e1ed4f6dc49c9ae10c2b5927c8107`
  );
  dispatch({
    type: FETCH_ARTICLES,
    payload: res.data
  });
};

export const fetchSectionArticles = type => async dispatch => {
  const res = await axios.get(
    `https://newsapi.org/v2/everything?q=${type}&apiKey=908e1ed4f6dc49c9ae10c2b5927c8107`
  );
  dispatch({
    type: FETCH_SECTION_ARTICLES,
    payload: res.data
  });
};
