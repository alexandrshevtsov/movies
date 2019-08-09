import * as React from 'react';
import { connect } from 'react-redux';
import { requestMovieDetails } from '../../actions';
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

  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })

  renderMovieProperty = (label: string, text: string | undefined) => {
    return ((text && text.length > 0) ? <li className={styles.propertyIem}><span className={styles.propertyLabel}>{label}:</span> {text}</li> : '')
  }


  renderDetails = () => {
    const data = this.props.data;
    if (!data) return null;
    const imageUrl = !!data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : 'assets/no-image-available.svg';
    return (
      <div className={styles.movieDetailsContainer}>
        <div className={styles.movieDetails}>
          <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={imageUrl} />
            </div>
            <div className={styles.propertiesContainer}>
            <ul className={styles.propertiesList}>
              {this.renderMovieProperty('original title', data.original_title)}
              {this.renderMovieProperty('release date', data.release_date)}
              {this.renderMovieProperty('genres', data.genres && data.genres.map(g => g.name).join(', '))}
              {this.renderMovieProperty('production', data.production_companies && data.production_companies.map(c => c.name).join(', '))}
              {this.renderMovieProperty('language(s)', data.spoken_languages && data.spoken_languages.map(c => c.name).join(', '))}
              {this.renderMovieProperty('countries', data.production_countries && data.production_countries.map(c => c.name).join(', '))}
              {this.renderMovieProperty('original language', data.original_language)}
              {this.renderMovieProperty('rating', `${data.vote_average} (${data.vote_count} vote(s))`)}
              {this.renderMovieProperty('popularity', `${data.popularity}`)}
              {(data.homepage && data.homepage.length > 0) ? <li className={styles.propertyIem}><span className={styles.propertyLabel}>homepage:</span> <a href={data.homepage} target="_blank">{data.homepage}</a></li> : ''}
              {this.renderMovieProperty('budget', (data.budget && data.budget > 0 ? this.formatter.format(data.budget) : ''))}
              {this.renderMovieProperty('revenue', (data.revenue && data.revenue > 0 ? this.formatter.format(data.revenue) : ''))}
              {this.renderMovieProperty('IMDB', data.imdb_id)}
              {this.renderMovieProperty('tagline', data.tagline)}
              {this.renderMovieProperty('status', data.status)}
            </ul>
          </div>
          <div className={styles.overwiewContainer}>
            {data.overview}
          </div>
        </div>
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
