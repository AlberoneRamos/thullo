import React from 'react';
import classNames from 'classnames';
import './Tag.scss';

type TagProps = {
  /** Children to be rendered as the tag label */
  children: React.ReactNode,
  /** CSS classes array or string */
  classList?: Array<string> | string
};

const Tag = ({ children, classList = '' }: TagProps) => (
  <small
    className={classNames(
      classList, 
      'tag rounded-full px-2 py-1 bg-purple-200 text-purple-700 text-xs font-medium'
    )} 
    data-testid="tag"
  >
    {children}
  </small>
);

export default Tag;