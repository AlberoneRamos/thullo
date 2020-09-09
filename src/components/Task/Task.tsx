import React from 'react';
import TaskModel from 'models/Task';
import { Avatar } from 'components/Avatar';
import { Tag } from 'components/Tag';
import './Task.scss';

export type TaskProps = {
  /** Task to be rendered */
  task: TaskModel,
  /** CSS classes array or string */
  classList?: Array<string> | string
};

const Task: React.FC<TaskProps> = ({ task: {
  title,
  description,
  due,
  assignees,
  tags,
  picture
}}) => (
  <div className="task" data-testid="task ">
    <img src={picture} alt="Card background" />
    <b data-testid="task-title">{title}</b>
    <span data-testid="task-description">{description}</span>
    <span data-testid="task-due">{(new Date(due)).toString()}</span>
    <div data-testid="task-tags">
      {tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
    </div>
    <div data-testid="task-assignees">
      {assignees.map((assignee) => <Avatar user={assignee} size="small" key={assignee.id} />)}
    </div>
  </div>
);

Task.defaultProps = {
  classList: ''
}

export default Task;