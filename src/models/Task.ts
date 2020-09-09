import User from './User';

interface Task {
  id: string,
  title: string,
  tags: Array<string>,
  description: string,
  picture?: string
  due: number,
  assignees: Array<User>
};

export default Task;
