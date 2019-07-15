import { MovieListItemModel } from './movie-list-item-model';

export interface MovieListPageModel {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieListItemModel[];
}
