import { call, put, takeLatest } from 'redux-saga/effects';
import {
  REQUEST_MOVIES,
  receiveMovies,
  REQUEST_MOVIE_DETAILS,
  receiveMovieDetails
} from 'app/actions';
import { getMovies, getMovieDetails } from 'app/services';

function* getMoviesSaga(action: any /* TODO */) {
  try {
    const data = yield call(() => getMovies(action.query, action.page));
    yield put(receiveMovies(data));
  } catch (e) {
    console.log(e);
  }
}

function* getMovieDetailsSaga(action: any /* TODO */) {
  try {
    const data = yield call(() => getMovieDetails(action.id));
    yield put(receiveMovieDetails(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_MOVIES, getMoviesSaga);
  yield takeLatest(REQUEST_MOVIE_DETAILS, getMovieDetailsSaga);
}
