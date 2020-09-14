import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

  it('Should fire addTaskHandler when add task button is clicked.', () => {
    // prepare
    const addTaskHandler = jest.fn();
    const { getByTestId } = render(<List tasks={tasks} title="title" addTaskHandler={addTaskHandler} />);
    // execute
    fireEvent.click(getByTestId('list-toggle-form'));
    expect(getByTestId('list-add-task-form')).toBeInTheDocument();
  });

  it('Should fire addTaskHandler when add task button is clicked.', () => {
    // prepare
    const addTaskHandler = jest.fn();
    const { getByTestId } = render(<List tasks={tasks} title="title" addTaskHandler={addTaskHandler} />);
    // execute
    fireEvent.click(getByTestId("list-toggle-form"));
    fireEvent.click(getByTestId("list-add-button"));
    expect(addTaskHandler).toHaveBeenCalled();
  });
});