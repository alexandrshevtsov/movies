import * as React from 'react';
import { mount } from 'enzyme';
import { MovieListItem } from './movie-list-item';
import { MovieListItemModel } from '../../models/movie-list-item-model';
import { BrowserRouter as Router } from 'react-router-dom';

describe('MovieListItem', () => {
  it('rendering', () => {
    var model: MovieListItemModel = {
      id: 123,
      title: 'My Movie',
      overview: 'My Movie overview',
      poster_path: 'image.jpg'
    } as MovieListItemModel;
    const component = mount(
      <Router>
        <MovieListItem model={model} />
      </Router>
    );
    const titleComponent = component.find('h1');
    expect(titleComponent.contains('My Movie')).toBe(true);
    //const overviewComponent = component.find('');
    //expect(overviewComponent.contains('My Movie overview')).toBe(true);
    expect(component).toMatchSnapshot();
  });
});
