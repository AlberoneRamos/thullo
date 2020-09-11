import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Avatar, { AvatarProps } from './Avatar';
import users from '__mocks__/users';

export default {
  title: 'Avatar component',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const AvatarComponent = Template.bind({});
AvatarComponent.args = { user: users[0] };