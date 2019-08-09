import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  RECEIVE_MOVIES_ERROR,
  REQUEST_MOVIE_DETAILS,
  RECEIVE_MOVIE_DETAILS,
  RECEIVE_MOVIE_DETAILS_ERROR
} from '../actions';

export const movies = (state = { isLoading: false }, action: any) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return { ...state, callback: null, error: null, isLoading: true };
    case REQUEST_MOVIE_DETAILS:
      return { ...state, error: null, isLoading: true };
    case RECEIVE_MOVIES:
      return { ...state, data: action.data, callback: action.callback, error: null, isLoading: false };
    case RECEIVE_MOVIE_DETAILS:
      return { ...state, data: action.data, error: null, isLoading: false };
    case RECEIVE_MOVIES_ERROR:
      return { ...state, callback: null, error: action.error, isLoading: false };
    case RECEIVE_MOVIE_DETAILS_ERROR:
      return { ...state, error: action.error, isLoading: false };

    default:
      return state;
  }
};
