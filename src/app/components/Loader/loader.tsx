import * as React from 'react';
import styles from './loader.scss';

interface ILoaderProps {
  message?: string;
  showAsError?: boolean;
}

export const Loader = (props: ILoaderProps) => {
  const className = styles.loader; // + props.showAsError ? ' ' + styles.error : '';
  const message = props.message || 'Loading...';
  let text = props.showAsError
    ? <span className={styles.error}>{message}</span>
    : <>{message}</>
  return <div className={className}>{text}</div>;
};
