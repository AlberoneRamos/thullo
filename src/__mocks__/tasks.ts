import Task from '../models/Task';

const tasks: { [id: string]: Task } = {
  task1: {
    id: 'task1',
    title: 'Task Title',
    description: 'This is the task description',
    due: 1599335605297,
    assignee: {
      id: '1234',
      username: 'hnrq',
      fullname: 'Henrique Ramos'
    }
  },
  task2: {
    id: 'task2',
    title: 'Task Title',
    description: 'This is the task description',
    due: 1599339905297,
    assignee: {
      id: '1234',
      username: 'hnrq',
      fullname: 'Henrique Ramos'
    }
  }
}

export default tasks;
