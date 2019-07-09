import * as type from './actionTypes';
import * as authorApi from '../../api/authorApi';
import { beginApiCall, apiCallError } from './apiStatusActions';

export const loadAuthorsSuccess = (authors) => ({
  type: type.LOAD_AUTHORS_SUCCESS,
  authors
});

/**
 * Fetches all the authors
 * @returns {function}
 */
export const loadAuthors = () => (dispatch) => {
  dispatch(beginApiCall());

  return authorApi
    .getAuthors()
    .then((authors) => {
      dispatch(loadAuthorsSuccess(authors));
    })
    .catch((error) => {
      dispatch(apiCallError(error));
      throw error;
    });
};
