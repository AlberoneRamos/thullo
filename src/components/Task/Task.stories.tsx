import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Task, TaskProps } from 'components/Task';
import tasks from '__mocks__/tasks';

export default {
  title: 'Task component',
  component: Task,
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const TaskComponent = Template.bind({});
TaskComponent.args = {
  task: tasks.task1
}