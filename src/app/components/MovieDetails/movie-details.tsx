import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { requestMovieDetails } from 'app/actions';
import { MovieDetailsModel } from '../../models/';
import styles from './movie-details.scss';

interface IMovieDetailsProps extends IMovieDetailsConnectedProps {
  id: number;
}

interface IMovieDetailsState {}

interface IMovieDetailsConnectedProps {
  requestMovieDetails?: (id: number) => void;
  data?: MovieDetailsModel;
}

@connect(
  (state: any) => state,
  (dispatch: Dispatch) => bindActionCreators({ requestMovieDetails }, dispatch)
)
export class MovieDetails extends React.Component<IMovieDetailsProps, IMovieDetailsState> {
  constructor(props: IMovieDetailsProps) {
    super(props);
  }

  componentDidMount() {
    const requestMovieDetails = this.props.requestMovieDetails;
    if (requestMovieDetails) requestMovieDetails(this.props.id);
  }

  render() {
    const data = this.props.data;
    if (!data) return null;
    return (
      <div className={styles.movieDetails}>
        <h1>{data.title}</h1>
        <p>{data.overview}</p>
      </div>
    );
  }
}
