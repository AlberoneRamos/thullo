import Task from './Task';

type List = {
  title: string,
  tasks: { [id: string]: Task },
  id?: string,
}

export default List;