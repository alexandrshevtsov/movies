import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  RECEIVE_MOVIES_ERROR,
  REQUEST_MOVIE_DETAILS,
  RECEIVE_MOVIE_DETAILS,
  RECEIVE_MOVIE_DETAILS_ERROR
} from 'app/actions';

export const movies = (state = { isLoading: false }, action: any) => {
  switch (action.type) {
    case REQUEST_MOVIES:
    case REQUEST_MOVIE_DETAILS:
      return { ...state, error: null, isLoading: true };
    case RECEIVE_MOVIES:
    case RECEIVE_MOVIE_DETAILS:
      return { ...state, data: action.data, error: null, isLoading: false };
    case RECEIVE_MOVIES_ERROR:
    case RECEIVE_MOVIE_DETAILS_ERROR:
      return { ...state, error: action.error, isLoading: false };

    default:
      return state;
  }
};
