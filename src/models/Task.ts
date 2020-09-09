import User from './User';

interface Task {
  id: string,
  title: string,
  description: string,
  due: number,
  assignee: User
};

export default Task;
