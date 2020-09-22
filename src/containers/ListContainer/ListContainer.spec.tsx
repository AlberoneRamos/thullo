import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import lists from '__mocks__/lists';
import ListContainer from './ListContainer';

describe('ListContainer test section.', () => {
  it('should receive an array of lists.', () => {
    // prepare
    const { getAllByTestId } = render(<ListContainer lists={lists} />);
    // execute
    expect(getAllByTestId('list')).toHaveLength(4);
  });

  it('should show a new list form when the add another list button is clicked.', () => {
    // prepare
    const { getByTestId } = render(<ListContainer lists={lists} />);
    // execute
    fireEvent.click(getByTestId('listcontainer-toggle-form'));
    expect(getByTestId('listcontainer-add-list-form')).toBeInTheDocument();
  });

  it('should trigger addListHandler when clicking save on the new list form.', () => {
    // prepare
    const addListHandler = jest.fn();
    const { getByTestId } = render(<ListContainer lists={lists} addListHandler={addListHandler} />);
    // execute
    fireEvent.click(getByTestId('listcontainer-toggle-form'));
    fireEvent.click(getByTestId('listcontainer-add-button'));
    expect(addListHandler).toHaveBeenCalled();
  });
});