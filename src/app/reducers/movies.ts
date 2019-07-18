import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES,
  REQUEST_MOVIE_DETAILS,
  RECEIVE_MOVIE_DETAILS
} from 'app/actions';

export const movies = (state = { isLoading: false }, action: any) => {
  switch (action.type) {
    case REQUEST_MOVIES:
    case REQUEST_MOVIE_DETAILS:
      return { ...state, isLoading: true };
    case RECEIVE_MOVIES:
    case RECEIVE_MOVIE_DETAILS:
      return { ...state, data: action.data, isLoading: false };
    default:
      return state;
  }
};
