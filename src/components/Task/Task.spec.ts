import React from 'react';
import { render } from '@testing-library/react';
import Task from './Task';
import tasks from '__mocks__/tasks';

describe('Task test section', () => {
  it('Should have a description.', () => {
    // prepare
    const { getByTestId } = render(<Task task={tasks[0]} />);
  });
  it('Should have an assignee.', () => {
    // prepare
    const { getByTestId } = render(<Task task={tasks[0]} />);
  });
  it('Should have a type.', () => {});
  it('Should have a due date.', () => {});
});
