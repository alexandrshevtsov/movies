import { MovieListPageModel, MovieDetailsModel } from '../models';

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';

export const REQUEST_MOVIE_DETAILS = 'REQUEST_MOVIE_DETAILS';
export const RECEIVE_MOVIE_DETAILS = 'RECEIVE_MOVIE_DETAILS';

export const requestMovies = (query: string, page: number) => ({
  type: REQUEST_MOVIES,
  query,
  page
});
export const receiveMovies = (data: MovieListPageModel) => ({ type: RECEIVE_MOVIES, data });

export const requestMovieDetails = (id: number) => ({ type: REQUEST_MOVIE_DETAILS, id });
export const receiveMovieDetails = (data: MovieDetailsModel) => ({
  type: RECEIVE_MOVIE_DETAILS,
  data
});
