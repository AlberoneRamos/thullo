import React from 'react';
import { RecoilRoot } from 'recoil';
import { ListContainer } from 'containers/ListContainer';
import lists from '__mocks__/lists';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <ListContainer lists={lists} />
    </RecoilRoot>
  );
}

export default App;
