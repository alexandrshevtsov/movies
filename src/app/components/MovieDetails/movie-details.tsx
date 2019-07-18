import * as React from 'react';
import { connect } from 'react-redux';
import { requestMovieDetails } from 'app/actions';
import { MovieDetailsModel } from '../../models/';
import styles from './movie-details.scss';
import { Loader } from '../Loader/loader';

interface IMovieDetailsProps extends IMovieDetailsConnectedProps {
  id: number;
}

interface IMovieDetailsConnectedProps {
  requestMovieDetails?: (id: number) => void;
  data?: MovieDetailsModel;
  isLoading?: boolean;
  error?: string;
}

@connect(state => state.movies, { requestMovieDetails })
export class MovieDetails extends React.Component<IMovieDetailsProps> {
  componentDidMount() {
    const requestMovieDetails = this.props.requestMovieDetails;
    if (requestMovieDetails) requestMovieDetails(this.props.id);
  }

  renderDetails = () => {
    const data = this.props.data;
    if (!data) return null;
    return (
        <div className={styles.movieDetails}>
          <h1>{data.title}</h1>
          <p>{data.overview}</p>
        </div>
    );
  }

  render() {
    const isLoading = this.props.isLoading;
    const error = this.props.error;
    return (
      <>
        {this.renderDetails()}
        {(isLoading || error) && <Loader message={error} showAsError={!!error} />}
      </>
    );
  }
}
