import { getMoviesSaga } from '.';
import { call, put } from 'redux-saga/effects';
import { getMovies } from '../services';
import { receiveMovies, REQUEST_MOVIES } from "../actions";
import { MovieListPageModel } from "../models";
import { inspect } from 'util' // or directly

describe('Sagas', () => {
  it('getMoviesSaga', () => {
    let action = { type: REQUEST_MOVIES, query: 'matrix', page: 1 };
    let data = {} as unknown as MovieListPageModel;
    let gen = getMoviesSaga(action);
    let current = gen.next();
    expect(inspect(current.value)).toEqual(inspect(call(() => getMovies(action.query, action.page))));
    expect(current.done).toBe(false);
    current = gen.next();
    wait(7000);
    expect(inspect(current.value)).toEqual(inspect(put(receiveMovies(data))));
    expect(current.done).toBe(false);
    current = gen.next();
    expect(current.done).toBe(true);
  });
  /*
  it('getMovieDetailsSaga', () => {
    let action = { id: 'matrix', page: 1 };
    let data = undefined as unknown as MovieListPageModel;
    let gen = getMoviesSaga(action);
    let current = gen.next();
    expect(inspect(current.value)).toEqual(inspect(call(() => getMovies(action.query, action.page))));
    expect(current.done).toBe(false);
    current = gen.next();
    expect(inspect(current.value)).toEqual(inspect(put(receiveMovies(data))));
    expect(current.done).toBe(false);
    current = gen.next();
    expect(current.done).toBe(true);
  });
  */
});

function wait(ms: number) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}
