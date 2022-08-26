import React,{useContext} from 'react';
import {store} from '../App';

export const SecondComp = () => {
    const[data,setData] = useContext(store);
  return (
    <div className='card'>
        <div className='card-body'>
            {data.length}
        </div>
    </div>
  )
}
