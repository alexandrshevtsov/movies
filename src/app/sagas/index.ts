import { call, put, takeLatest } from 'redux-saga/effects';
import {
  REQUEST_MOVIES,
  receiveMovies,
  receiveMoviesError,
  REQUEST_MOVIE_DETAILS,
  receiveMovieDetails,
  receiveMovieDetailsError
} from '../actions';
import { getMovies, getMovieDetails } from '../services';

export function* getMoviesSaga(action: any /* TODO */) {
  try {
    const data = yield call(() => getMovies(action.query, action.page));
    yield put(receiveMovies(data, action.callback));
  } catch (e) {
    yield put(receiveMoviesError(e.message));
    console.log(e);
  }
}

export function* getMovieDetailsSaga(action: any /* TODO */) {
  try {
    const data = yield call(() => getMovieDetails(action.id));
    yield put(receiveMovieDetails(data));
  } catch (e) {
    yield put(receiveMovieDetailsError(e.message));
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_MOVIES, getMoviesSaga);
  yield takeLatest(REQUEST_MOVIE_DETAILS, getMovieDetailsSaga);
}
