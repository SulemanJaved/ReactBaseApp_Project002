import React from 'react';
import Hello from './Hello';

function App({name, age}) {
  return <div>
          Hello World from <strong>{name}</strong> haveing age ={age}
          <br/>
          <Hello firstName={name}></Hello>
        </div>
} 

export default App
