import { MovieListPageModel, MovieDetailsModel } from '../models';

export const REQUEST_MOVIES = 'REQUEST_MOVIES';
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES';
export const RECEIVE_MOVIES_ERROR = 'RECEIVE_MOVIES_ERROR';

export const REQUEST_MOVIE_DETAILS = 'REQUEST_MOVIE_DETAILS';
export const RECEIVE_MOVIE_DETAILS = 'RECEIVE_MOVIE_DETAILS';
export const RECEIVE_MOVIE_DETAILS_ERROR = 'RECEIVE_MOVIE_DETAILS_ERROR';

export const requestMovies = (query: string, page: number, callback?: () => void) => ({ type: REQUEST_MOVIES, query, page, callback });
export const receiveMovies = (data: MovieListPageModel, callback?: () => any) => ({ type: RECEIVE_MOVIES, data, callback });
export const receiveMoviesError = (error: string) => ({ type: RECEIVE_MOVIES_ERROR, error });

export const requestMovieDetails = (id: number) => ({ type: REQUEST_MOVIE_DETAILS, id });
export const receiveMovieDetails = (data: MovieDetailsModel) => ({ type: RECEIVE_MOVIE_DETAILS, data });
export const receiveMovieDetailsError = (error: string) => ({ type: RECEIVE_MOVIE_DETAILS_ERROR, error });
