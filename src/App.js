import './App.css';
import React, { useState, createContext } from 'react';
import { FirstComp } from './ContextAPI\'S/FirstComp';
import { SecondComp } from './ContextAPI\'S/SecondComp';

export const store = createContext();
const App = () => { 
const[data, setData] = useState([
  {name:"Apple"},
  {name:"Vivo"},
  {name:"One+"},
  {name:"Samsung"},
  {name:"Apple"},
  {name:"Vivo"},
  {name:"One+"},
  {name:"Samsung"},
  {name:"Hello"}
])
  return (
    <React.Fragment>
     <store.Provider value={[data,setData]}>
      <div className='text-center'>
        <FirstComp />
        <SecondComp />
      </div>
      
     </store.Provider>
    </React.Fragment>
  )
}
export default App