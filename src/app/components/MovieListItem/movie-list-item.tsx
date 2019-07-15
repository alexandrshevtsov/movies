import * as React from 'react';
import { MovieListItemModel } from '../../models/movie-list-item-model';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import styles from './movie-list-item.scss';

interface IMovieListItemProps {
  model: MovieListItemModel;
}

export const MovieListItem = (props: IMovieListItemProps) => {
  const detailsUrl = `/details/${props.model.id}`;
  return (
    <div className={styles.movieListItem}>
      <div className={styles.imageContainer}>
        <LazyLoad>
          <Link to={detailsUrl} target="_blank">
            <img
              className={styles.image}
              alt=""
              src={`https://image.tmdb.org/t/p/w500/${props.model.poster_path}`}
            />
          </Link>
        </LazyLoad>
      </div>
      <div className={styles.infoContainer}>
        <h1>{props.model.title}</h1>
        <p>{props.model.overview}</p>
        <br />
        <br />
        <div className={styles.detailsLinkContainer}>
          <hr />
          <Link className={styles.detailsLink} to={detailsUrl} target="_blank">
            MORE INFO
          </Link>
        </div>
      </div>
    </div>
  );
};
