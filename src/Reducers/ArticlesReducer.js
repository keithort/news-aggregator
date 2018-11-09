import { FETCH_ARTICLES, FETCH_SECTION_ARTICLES } from "../Actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...state, ...action.payload };

    case FETCH_SECTION_ARTICLES:
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
