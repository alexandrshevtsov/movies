import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { PagedList } from '../PagedList/paged-list';
import { MovieListPageModel } from '../../models';
import { requestMovies } from '../../actions';
import { MovieListItem } from '../MovieListItem/movie-list-item';
import styles from './movie-list.scss';

interface IMovieListProps extends IMovieListConnectedProps {
  query: string;
  pageLink?: string;
  pageNumber?: number;
}

interface IMovieListState {}

interface IMovieListConnectedProps {
  requestMovies?: (query: string, page: number) => void; //,
  data?: MovieListPageModel;
}

@connect(
  (state: any) => state,
  (dispatch: Dispatch) => bindActionCreators({ requestMovies }, dispatch)
)
export class MovieList extends React.Component<IMovieListProps, IMovieListState> {
  componentDidUpdate(prevProps: IMovieListProps) {
    if (prevProps.query !== this.props.query && this.props.query.length > 0)
      this.loadBatch((this.props.pageNumber || 1) - 1);
  }

  loadBatch = (batchIndex: number) => {
    if (this.props.requestMovies) this.props.requestMovies(this.props.query, batchIndex + 1);
  };

  render() {
    const data = this.props.data;
    if (!data) return null;
    if (!data.results) return null;
    const batchIndex = data.page - 1;
    const batchCount = data.total_pages;
    let elements = data.results.map((item) => <MovieListItem model={item} />);
    let batch = { batchIndex, elements };
    return (
      <div className={styles.movieList}>
        <PagedList
          className={styles.movieListPaged}
          itemClassName={styles.movieListPagedItem}
          pagerContainerClassName={styles.pagerContainerClassName}
          pagerClassName={styles.pagerClassName}
          pagerItemClassName={styles.pagerItemClassName}
          batchIndex={batchIndex}
          batchSize={data.results.length}
          batchCount={batchCount}
          batch={batch}
          pageLink={this.props.pageLink}
          loadBatch={this.loadBatch}
        />
      </div>
    );
  }
}
