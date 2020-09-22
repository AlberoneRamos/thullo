import React, { useState } from 'react';
import { Task } from 'components/Task';
import { Popover } from 'components/Popover';
import { MeatballsIcon, PlusIcon } from 'icons';
import ListModel from 'models/List';
import classNames from 'classnames';
import TaskModel from 'models/Task';
import './List.scss';

export interface ListProps extends ListModel {
  /** Function to be called when clicking on button to add new card */
  addTaskHandler?(task: TaskModel): void,
  /** Actions to be displayed on three dots button */
  listActions?: [ListAction],
  /** CSS classes array or string */
  classList?: Array<string> | string,
}

type ListAction = {
  /** List action label */
  label: string, 
  /** Function to be called when the list action is clicked */
  clickHandler (params?: any): void
}

const List = ({ 
  tasks, 
  title, 
  addTaskHandler = (task) => console.log(task), 
  listActions = [{ label: 'Action', clickHandler: () => {} }],
  classList = ''
}: ListProps) => { 
  const [displayAddTask, setDisplayAddTask] = useState<Boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>('');
  return (
    <div className={classNames('list', classList)} data-testid="list">
      <div data-testid="list-header" className="flex justify-between">
        <b data-testid="list-title" className="font-semibold">{title}</b>
        <Popover 
          label={<MeatballsIcon />} 
          items={listActions}
          classList="text-gray-600"
        />
      </div>
      <div className="list-tasks">
        {Object.entries(tasks).map(([key, task]) => <Task classList="mb-4" task={task} key={key} />)}
        {displayAddTask && (
          <form 
            data-testid="list-add-task-form"
            className="mb-4 border-solid border-2 p-4 rounded-lg shadow-lg border-gray-200"
            onSubmit={(e) => { 
              e.preventDefault();
              addTaskHandler(new TaskModel(taskTitle));
              setTaskTitle('');
              setDisplayAddTask(false);
            }}
          >
            <input 
              placeholder="Enter task title" 
              type="text" 
              className="mb-4"
              onChange={(e) => setTaskTitle(e.target.value)} 
              value={taskTitle}
            />
            <button 
            className="bg-green-500 text-white py-1 px-4 
            rounded-lg btn hover:bg-green-600" 
            data-testid="list-add-button"
            >
              Save
            </button>
          </form>
        )}
        <button 
            onClick={() => setDisplayAddTask(!displayAddTask)} 
            data-testid="list-toggle-form" 
            className="flex btn bg-blue-300 text-blue-700 w-full px-3 py-1 rounded-lg justify-between text-sm"
          >
          Add another card <PlusIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default List;