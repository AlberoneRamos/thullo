import List from 'models/List';
import tasks from './tasks';

const lists: { [id: string]: List } = {
  adsad: {
    title: 'First list',
    tasks,
    id: 'ads32ad'
  },
  kljs: {
    title: 'Second List',
    tasks,
    id: 'kljs'
  },
  hfdnjs: {
    title: 'Third List',
    tasks,
    id: 'hfdnjs'
  },
  hjfksdf: {
    title: 'Fourth list',
    tasks,
    id: 'hjfksdf'
  }
};

export default lists;