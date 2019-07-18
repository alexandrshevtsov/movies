import { RECEIVE_MOVIES, RECEIVE_MOVIE_DETAILS } from 'app/actions';

export const movies = (state = {}, action: any) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
    case RECEIVE_MOVIE_DETAILS:
      return { data: action.data };
    default:
      return state;
  }
};
