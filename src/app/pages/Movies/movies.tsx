import * as React from 'react';
import { MovieList } from '../../components';
import { stringToInteger } from '../../utils';
import { SearchPane } from '../../components/SearchPane/search-pane';

interface IMoviesProps {
  match: any;
  history: any;
}

interface IMoviesState {
  query: string;
  pageNumber: number
}

export class Movies extends React.Component<IMoviesProps, IMoviesState> {
  constructor(props: IMoviesProps) {
    super(props);
    this.state = { query: '', pageNumber: 1 };
  }

  componentDidMount() {
    const query = this.props.match.params.query;
    const pageNumber = stringToInteger(this.props.match.params.page, 1);
    if (query && query.length > 0) {
      this.search(query, pageNumber);
    }
  }

  getPageLink = (): string => `/movies/${this.state.query}`;

  getCurrentPageLink = (): string => `${this.getPageLink() + (this.state.pageNumber > 1 ? `/${this.state.pageNumber}` : '')}`;

  search = (query: string, pageNumber: number): void => this.setState({ query: query, pageNumber: pageNumber }, () => this.props.history.push(this.getCurrentPageLink()));

  searchClick = (query: string): void =>  this.search(query, 1);

  render() {
    const state = this.state;

    return (
      <>
        <SearchPane query={state.query} onSearch={this.searchClick} />
        <MovieList
          query={state.query}
          pageNumber={state.pageNumber}
          pageLink={this.getPageLink()}
        />
      </>
    );
  }
}
