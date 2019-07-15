import * as React from 'react';
import { Link } from 'react-router-dom';

interface IPagerProps {
  batchIndex: number;
  batchCount: number;
  className?: string;
  itemClassName?: string;
  pageLink?: string;
  pageClick?: (batchIndex: number) => void;
}

export const Pager = (props: IPagerProps) => {
  const batchCount = props.batchCount;
  const pageLink = props.pageLink;
  if (batchCount <= 1 || !pageLink || pageLink.length === 0) return null;
  let pages: any[] = [];
  for (let batchIndex = 0; batchIndex < batchCount; batchIndex++) {
    const itemKey = `pager-item-${batchIndex}`;
    const link = batchIndex > 0 ? pageLink + '/' + (batchIndex + 1).toString() : pageLink;
    const pageTitle = batchIndex + 1;
    let pageClick = props.pageClick;
    pages.push(
      <li className={props.itemClassName} key={itemKey}>
        {batchIndex === props.batchCount - 1 ? 'of ' : ''}
        {batchIndex === props.batchIndex ? (
          pageTitle
        ) : (
          <Link
            to={link}
            onClick={() => {
              if (pageClick) pageClick(batchIndex);
            }}
          >
            {pageTitle}
          </Link>
        )}
      </li>
    );
  }
  return <ul className={props.className}>{pages}</ul>;
};
