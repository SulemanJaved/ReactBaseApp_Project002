import React from 'react';
import './Hello.css'

function Hello({firstName}) {
  return <p className="myName">This is para in Hello Tag name : <strong>{firstName}</strong></p>
} 

export default Hello; 
