import * as React from 'react';
import { connect } from 'react-redux';
import { PagedList } from '../PagedList/paged-list';
import { MovieListPageModel } from '../../models';
import { requestMovies } from '../../actions';
import { MovieListItem } from '../MovieListItem/movie-list-item';
import styles from './movie-list.scss';
import { Loader } from '../Loader/loader';

interface IMovieListProps extends IMovieListConnectedProps {
  query: string;
  pageLink?: string;
  pageNumber?: number;
}

interface IMovieListConnectedProps {
  requestMovies?: (query: string, page: number) => void;
  data?: MovieListPageModel;
  isLoading?: boolean;
}

@connect(state => state.movies, { requestMovies })
export class MovieList extends React.Component<IMovieListProps> {
  componentDidUpdate(prevProps: IMovieListProps) {
    const props = this.props;
    if (prevProps.query !== props.query && props.query.length > 0)
      this.loadBatch((props.pageNumber || 1) - 1);
  }

  loadBatch = (batchIndex: number) => {
    const props = this.props;
    if (props.requestMovies) props.requestMovies(props.query, batchIndex + 1);
  };

  render() {
    const data = this.props.data;
    const isLoading = this.props.isLoading;
    if (!data || !data.results) return null;
    const batchIndex = data.page - 1;
    const batchCount = data.total_pages;
    let elements = data.results.map((item) => <MovieListItem model={item} />);
    let batch = { batchIndex, elements };
    return (
      <>
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
        {isLoading && <Loader />}
      </>
    );
  }
}
