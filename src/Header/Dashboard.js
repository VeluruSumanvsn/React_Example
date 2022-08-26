import React, { useState } from 'react'

export const Dashboard = () => {
    const[data, setData] = useState(0); 

  return (
    <div>{data}
     <button onClick={() =>setData((data+1))}> + </button> 
      <button onClick={() =>setData((data-1))}> - </button>
    </div>
  )
}
