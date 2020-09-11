import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import List, { ListProps } from './List';
import tasks from '__mocks__/tasks';

export default {
  title: 'List component',
  component: List,
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const ListComponent = Template.bind({});
ListComponent.args = { tasks };