import React, { useState } from 'react';
import Map from './Map/Map';
import Simplash from './Simplash/Main';
import Todolist from './TodoList/ToDoListApp';

const renderComponents = [
  {
    name: 'Map',
    component: <Map />,
  },
  {
    name: 'simplash',
    component: <Simplash />,
  },
  {
    name: 'todolist',
    component: <Todolist />,
  },
];

const App = () => {
  const [current, setCurrent] = useState(0);
  const handleRender = (idx) => {
    setCurrent(idx);
  };
  return (
    <div>
      {renderComponents.map((el, i) => (
        <button
          style={{ width: '120px', height: 'auto' }}
          key={i}
          onClick={() => handleRender(i)}
        >
          {el.name}
        </button>
      ))}
      {renderComponents[current].component}
    </div>
  );
};
export default App;
