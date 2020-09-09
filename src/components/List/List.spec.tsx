import React from 'react';
import { render } from '@testing-library/react';
import List from './List';
import tasks from '__mocks__/tasks';

describe('List test section', () => {
  it('Should have a title', () => {
    // prepare
    const { getByTestId } = render(<List tasks={tasks} title="title" />);
    // execute
    expect(getByTestId('list-title')).toHaveTextContent('title')
  });
  it('Should render a Task for each one provided', () => {
    // prepare
    const { getAllByTestId } = render(<List tasks={tasks} title="title" />);
    // execute
    expect(getAllByTestId('task')).toHaveLength(Object.keys(tasks).length);
  });
});