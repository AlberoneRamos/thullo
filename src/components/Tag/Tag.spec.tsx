import React from 'react';
import { render } from '@testing-library/react';
import Tag from './Tag';

describe('Tag test section', () => {
  it('Should render a string as children.', () => {
    // prepare
    const { getByTestId } = render(<Tag>Test</Tag>);
    // execute
    expect(getByTestId('tag')).toHaveTextContent('Test');
  });
});
