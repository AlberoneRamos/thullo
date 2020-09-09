import React from 'react';
import classNames from 'classnames';
import './Tag.scss';

type TagProps = {
  /** Children to be rendered as the tag label */
  children: React.ReactNode,
  /** CSS classes array or string */
  classList?: Array<string> | string
};

const Tag: React.FC<TagProps> = ({ children, classList }) => (
  <small className={classNames(classList, 'tag')} data-testid="tag">{children}</small>
);

Tag.defaultProps = {
  classList: ''
};

export default Tag;