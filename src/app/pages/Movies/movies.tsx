import * as React from 'react';
import { MovieList } from 'app/components';
import { stringToInteger } from '../../utils';
import { SearchPane } from '../../components/SearchPane/search-pane';

interface IMoviesProps {
  match: any;
  history: any;
}

interface IMoviesState {
  query: string;
}

export class Movies extends React.Component<IMoviesProps, IMoviesState> {
  constructor(props: IMoviesProps) {
    super(props);
    this.state = { query: '' };
  }

  componentDidMount() {
    const query = this.props.match.params.query;
    if (query && query.length > 0) {
      this.search(query);
    }
  }

  getPageNumber = (): number => stringToInteger(this.props.match.params.page, 1);

  getPageLink = (): string => `/movies/${this.state.query}`;

  search = (query: string, callback?: () => void): void =>
    this.setState({ query: query }, callback);

  searchClick = (query: string): void =>
    this.search(query, () => this.props.history.push(this.getPageLink()));

  render() {
    return (
      <>
        <SearchPane query={this.state.query} onSearch={this.searchClick} />
        <MovieList
          query={this.state.query}
          pageNumber={this.getPageNumber()}
          pageLink={this.getPageLink()}
        />
      </>
    );
  }
}
