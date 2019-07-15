import * as React from 'react';
import { Pager } from './pager';

interface IPagedListProps {
  batchIndex: number;
  batchSize: number;
  batchCount: number;
  className?: string;
  pagerContainerClassName?: string;
  itemClassName?: string;
  pagerClassName?: string;
  pagerItemClassName?: string;
  pageLink?: string;
  loadBatch: (batchIndex: number) => void;
  batch: { batchIndex: number; elements: any[] };
  batches?: any[];
}

interface IPagedListState {}

export class PagedList extends React.Component<IPagedListProps, IPagedListState> {
  render() {
    const props = this.props;
    const batch = props.batch;
    if (!batch) return null;
    return (
      <>
        <ul className={this.props.className}>
          {batch.elements.map((el, index) => (
            <li className={this.props.itemClassName} key={`page-list-item-${index}`}>
              {el}
            </li>
          ))}
        </ul>
        <div className={this.props.pagerContainerClassName}>
          <Pager
            className={this.props.pagerClassName}
            itemClassName={this.props.pagerItemClassName}
            batchIndex={this.props.batchIndex}
            batchCount={this.props.batchCount}
            pageLink={this.props.pageLink}
            pageClick={this.props.loadBatch}
          />
        </div>
      </>
    );
  }
}
