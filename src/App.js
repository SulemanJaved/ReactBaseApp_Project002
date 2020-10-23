import React from 'react';
import Hello from './Hello';

function App({name, age}) {
  return <div>
          Hello World from <strong>{name}</strong> having age of{age}
          <br/>
          <Hello firstName={name}></Hello>
        </div>
} 

export default App
