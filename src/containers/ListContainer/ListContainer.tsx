import React, { useState } from 'react';
import { PlusIcon } from 'icons';
import { List } from 'components/List';
import ListModel from 'models/List';

type ListContainerProps = {
  /** Array of task lists */
  lists: { [id: string]: ListModel },
  /** Function to be called when the button to add a list is clicked */
  addListHandler? (listTitle: string): any
};

const ListContainer = ({ 
  lists, 
  addListHandler = (list) => console.log(list) 
}: ListContainerProps) => {
  const [displayAddList, setDisplayAddList] = useState<Boolean>(false);
  const [listTitle, setListTitle] = useState<string>('');

  return (
    <div 
      data-testid="list-container" 
      className="bg-gray-100 flex flex-row justify-between px-4 py-5 m-4 rounded-lg"
    >
      {Object.entries(lists).map(([key, list]) => <List key={key} {...list} classList="pr-4" />)}
      <div className="flex flex-col">
        {displayAddList && (
          <form 
            data-testid="listcontainer-add-list-form"
            className="mb-4 border-solid bg-white border-2 p-4 rounded-lg 
            shadow-lg border-gray-200"
            onSubmit={(e) => { 
              e.preventDefault();
              addListHandler(listTitle);
              setListTitle('');
              setDisplayAddList(false);
            }}
          >
            <input 
              placeholder="Enter list title" 
              type="text" 
              className="mb-4"
              onChange={(e) => setListTitle(e.target.value)} 
              value={listTitle}
            />
            <button 
            className="bg-green-500 text-white py-1 px-4 
            rounded-lg btn hover:bg-green-600" 
            data-testid="listcontainer-add-button"
            >
              Save
            </button>
          </form>
        )}
        <button 
          onClick={() => setDisplayAddList(!displayAddList)} 
          data-testid="listcontainer-toggle-form" 
          className="flex btn bg-blue-300 text-blue-700 w-full px-3 py-1 rounded-lg justify-between text-sm"
        >
          Add another list <PlusIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ListContainer;