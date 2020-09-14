import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import tasks from '__mocks__/tasks';
import Task from './Task';

describe('Task test section', () => {
  it('Should render 1 or more assignees.', () => {
    // prepare
    const { getAllByTestId } = render(<Task task={tasks.task1} />);
    // execute
    expect(getAllByTestId('avatar')).toHaveLength(1);
  });
  
  it('Should render a title.', () => {
    // prepare
    const { getByTestId } = render(<Task task={tasks.task1} />);
    // execute
    expect(getByTestId('task-title')).toHaveTextContent(tasks.task1.title);
  });
  
  it('Should receive a function to be called when button on the right of assignees is clicked.', () => {
    // prepare
    const mockFunction = jest.fn();
    const { getByTestId } = render(<Task task={tasks.task1} assigneeAction={mockFunction} />);
    // execute
    fireEvent.click(getByTestId('assignee-action'));
    expect(mockFunction).toHaveBeenCalled();
  });

  it('Should render a picture.', () => {
    // prepare
    const { getByTestId } = render(<Task task={tasks.task1} />);
    // execute
    expect(getByTestId('task-picture').getAttribute('src')).toBe(tasks.task1.picture);
  });

  it('Should render tags.', () => {
    // prepare
    const { getAllByTestId } = render(<Task task={tasks.task1} />);
    // execute
    expect(getAllByTestId('tag')).toHaveLength(2);
  });
});
