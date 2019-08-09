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

export const PagedList = (props: IPagedListProps) => {
  const batch = props.batch;
  if (!batch) return null;
  return (
    <>
      <ul className={props.className}>
        {batch.elements.map((el, index) => (
          <li className={props.itemClassName} key={`page-list-item-${props.pageLink}/${index}`}>
            {el}
          </li>
        ))}
      </ul>
      <div className={props.pagerContainerClassName}>
        <Pager
          className={props.pagerClassName}
          itemClassName={props.pagerItemClassName}
          batchIndex={props.batchIndex}
          batchCount={props.batchCount}
          pageLink={props.pageLink}
          pageClick={props.loadBatch}
        />
      </div>
    </>
  );
};
