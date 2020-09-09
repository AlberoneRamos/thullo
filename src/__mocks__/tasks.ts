import Task from '../models/Task';

const tasks: { [id: string]: Task } = {
  task1: {
    id: 'task1',
    title: 'Task Title',
    tags: ['Technical', 'Design'],
    description: 'This is the task description',
    background: 'https://as.ftcdn.net/r/v1/pics/4a0ef3252f98723dfb476a05a6412423f190ea6f/home/discover_collections/20Jun/photos.jpg',
    due: 1599335605297,
    assignees: [
      {
        id: '1234',
        username: 'hnrq',
        fullname: 'Henrique Ramos'
      }
    ]
  },
  task2: {
    id: 'task2',
    title: 'Task Title',
    tags: ['Technical', 'Concept'],
    description: 'This is the task description',
    background: 'https://cdn.business2community.com/wp-content/uploads/2015/10/42454567_m.jpg.jpg',
    due: 1599339905297,
    assignees: [
      {
        id: '1234',
        username: 'hnrq',
        fullname: 'Henrique Ramos'
      }
    ]
  }
}

export default tasks;
