import React from 'react';
import { render } from '@testing-library/react';
import Task from './Task';
import tasks from '__mocks__/tasks';

describe('Task test section', () => {
  it('Should render a description.', () => {
    // prepare
    const { getByTestId } = render(<Task task={tasks['task1']} />);
    // execute
    expect(getByTestId('task-description')).toHaveTextContent(tasks['task1'].description);
  });
  it('Should render 1 or more assignees.', () => {
    // prepare
    const { getAllByTestId } = render(<Task task={tasks['task1']} />);
    // execute
    expect(getAllByTestId('avatar')).toHaveLength(1);
  });
  it('Should render a title.', () => {
    // prepare
    const { getByTestId } = render(<Task task={tasks['task1']} />);
    // execute
    expect(getByTestId('task-title')).toHaveTextContent(tasks['task1'].title);
  });
  it('Should render a picture.', () => {
    // prepare
    const { getByTestId } = render(<Task task={tasks['task1']} />);
    // execute
    expect(getByTestId('task-picture').getAttribute('src')).toBe(tasks['task1'].picture);
  })
  it('Should render tags.', () => {
    //prepare
    const { getAllByTestId } = render(<Task task={tasks['task1']} />);
    // execute
    expect(getAllByTestId('tag')).toHaveLength(2);
  });
  it('Should render a due date.', () => {
    //prepare
    const { getByTestId } = render(<Task task={tasks['task1']} />);
    // execute
    expect(getByTestId('task-due')).toHaveTextContent((new Date(tasks['task1'].due)).toString());
  });
});
