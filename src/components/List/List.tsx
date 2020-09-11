import React from 'react';
import { Task } from 'components/Task';
import TaskModel from 'models/Task';
import './List.scss';

export type ListProps = {
  /** Array of tasks to be displayed here */
  tasks: { [id: string]: TaskModel },
  /** List title */
  title: string,
  /** Function to be called when clicking on button to add new card */
  addTaskHandler (task: TaskModel): void,
  /** Actions to be displayed on three dots button */
  listActions: [{ label: string, handler (params?:any ): void }] 
}

const List = ({ tasks, title, addTaskHandler }: ListProps) => (
  <div>a</div>
);

export default List;