import React from 'react';
import TaskModel from 'models/Task';
import { Avatar } from 'components/Avatar';
import { Tag } from 'components/Tag';
import classNames from 'classnames';
import { PlusIcon } from 'icons';
import './Task.scss';

export type TaskProps = {
  /** Task to be rendered */
  task: TaskModel,
  /** CSS classes array or string */
  classList?: Array<string> | string,
  /** Function to be called when button at the end of assignees list is clicked */
  assigneeAction?(value?: any): void
};

const Task = ({ 
  task: {
    title,
    assignees,
    tags,
    picture,
  }, 
  assigneeAction = () => {}, 
  classList = ''
}: TaskProps) => (
  <div className={classNames("task rounded-lg flex flex-col shadow-lg bg-white p-3", classList)} data-testid="task">
    <img 
      src={picture} 
      alt="Card background" 
      className="object-cover rounded-lg" 
      data-testid="task-picture" 
    />
    <h3 data-testid="task-title" className="font-semibold">{title}</h3>
    <div data-testid="task-tags" className="my-2">
      {tags.map((tag) => <Tag key={tag} classList="mr-3">{tag}</Tag>)}
    </div>
    <div data-testid="task-assignees" className="mt-3 flex">
      {assignees.map((assignee) => <Avatar user={assignee} size="small" key={assignee.id} classList="mr-3"/>)}
      <button 
        onClick={assigneeAction} 
        data-testid="assignee-action"
        className="rounded-lg bg-blue-500 h-8 w-8 hover:bg-blue-600
        transition duration-300 ease-in-out flex justify-center"
      >
        <PlusIcon className="text-white m-1 w-1/2 h-1/2 text-center" />
      </button>
    </div>
  </div>
);

export default Task;