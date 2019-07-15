import { RECEIVE_MOVIES, RECEIVE_MOVIE_DETAILS } from 'app/actions';

export default (state = {}, action: any) => {
  switch (action.type) {
    case RECEIVE_MOVIES:
    case RECEIVE_MOVIE_DETAILS:
      return action.data;
    default:
      return state;
  }
};
