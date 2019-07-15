import * as React from 'react';
import { MovieDetails } from '../../components';
import { stringToInteger } from '../../utils';

interface IDetailsProps {
  match: any;
}

export const Details = (props: IDetailsProps) => (
  <MovieDetails id={stringToInteger(props.match.params.id)} />
);
