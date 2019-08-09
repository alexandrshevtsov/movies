import * as React from 'react';
import styles from './search-pane.scss';

interface ISearchPaneProps {
  onSearch?: (query: string) => void;
  query?: string;
}

export class SearchPane extends React.Component<ISearchPaneProps> {
  inputQuery: HTMLInputElement | null | undefined;

  searchClick = (): void => {
    const onSearch = this.props.onSearch;
    const inputQuery = this.inputQuery;
    if (onSearch && inputQuery) onSearch(inputQuery.value);
  };

  componentDidUpdate() {
    const inputQuery = this.inputQuery;
    if (inputQuery) inputQuery.value = this.props.query || '';
  }

  render() {
    return (
      <div className={styles.searchPaneContainer}>
        <input className={styles.searchText} type="text" maxLength={50} ref={(ref) => (this.inputQuery = ref)} />
        <button className={styles.searchButton} onClick={this.searchClick}>Search</button>
      </div>
    );
  }
}
