import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import tasks from '__mocks__/tasks';
import Task, { TaskProps } from './Task';

export default {
  title: 'Task component',
  component: Task,
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const TaskComponent = Template.bind({});
TaskComponent.args = {
  task: tasks.task1
}