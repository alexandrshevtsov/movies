import * as React from 'react';
import { MovieListItemModel } from '../../models/movie-list-item-model';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import styles from './movie-list-item.scss';

interface IMovieListItemProps {
  model: MovieListItemModel;
}

export const MovieListItem = (props: IMovieListItemProps) => {
  const model = props.model;
  const detailsUrl = `/details/${model.id}`;
  const imageUrl = !!model.poster_path ? `https://image.tmdb.org/t/p/w500/${model.poster_path}` : 'assets/no-image-available.svg';
  return (
    <div className={styles.movieListItem}>
      <div className={styles.imageContainer}>
        <LazyLoad>
          <Link to={detailsUrl} target="_blank">
            <img className={styles.image} alt="" src={imageUrl} />
          </Link>
        </LazyLoad>
      </div>
      <div className={styles.infoContainer}>
        <h1>{model.title}</h1>
        <div className={styles.movieInfo}>
          {model.overview}
          <ul>
            <li>original title: {model.original_title}</li>
            <li>release date: {model.release_date}</li>
            <li>original language: {model.original_language}</li>
            <li>rating: {model.vote_average}</li>
            <li>popularity: {model.popularity}</li>
          </ul>
        </div>
        <br className={styles.spreader} />
        <br className={styles.spreader} />
        <div className={styles.detailsLinkContainer}>
          <div className={styles.detailsLinkContainerInner}>
            <hr />
            <Link className={styles.detailsLink} to={detailsUrl} target="_blank">
              MORE INFO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
