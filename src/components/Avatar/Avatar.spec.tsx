import React from 'react';
import { render } from '@testing-library/react'; 
import users from '__mocks__/users';
import Avatar from './Avatar';

describe('Avatar test section', () => {
  it('Should render a profile picture if provided', () => {
    // prepare
    const { getByTestId } = render(<Avatar user={users[0]} />);
    // execute
    expect(getByTestId('avatar-image').getAttribute('src')).toBe(users[0].profilePic);
  });
  it('Should render the user initials if no profile picture was provided', () => {
    // prepare
    const { getByTestId } = render(<Avatar user={{ ...users[0], profilePic: undefined }} />);
    // execute
    expect(getByTestId('avatar-initials')).toHaveTextContent('HR');
  });
});