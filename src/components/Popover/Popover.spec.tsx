import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Popover from './Popover';

describe('Popover test section', () => {
  it('Should render a button with a label.', () => {
    // prepare
    const { getByTestId } = render(<Popover label="Hello!" />)
    // execute
    expect(getByTestId('popover-button')).toHaveTextContent('Hello!');
  });

  it('Should render items as content.', () => {
    // prepare
    const { getAllByTestId } = render(
      <Popover items={[
        { label: 'First Item', clickHandler: () => {} },
        { label: 'Second Item', clickHandler: () => {} }
      ]} />
    );
    // execute
    expect(getAllByTestId('popover-item')).toHaveLength(2);
  });

  it('Should fire clickHandler when clicking popover item.', () => {
    // prepare
    const popoverItemFunction = jest.fn();
    const { getByTestId } = render(
      <Popover items={[{ label: 'Label', clickHandler: popoverItemFunction }]}/>
    );
    // execute
    fireEvent.click(getByTestId('popover-button'));
    fireEvent.click(getByTestId('popover-item'));
    expect(popoverItemFunction).toHaveBeenCalled();
  });

  it('Should toggle popover dropdown display when clicking the button.', () => {
    // prepare
    const { getByTestId } = render(<Popover />);
    // execute
    expect(getByTestId('popover-dropdown')).toHaveClass('hidden');
    fireEvent.click(getByTestId('popover-button'));
    expect(getByTestId('popover-dropdown')).toHaveClass('flex');
  });
});