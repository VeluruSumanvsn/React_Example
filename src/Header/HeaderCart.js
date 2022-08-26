import React from 'react'

export const HeaderCart = () => {
  const array = [
    {
      title:"Satish"
    },
    {
      title:"sai kiran"
    },
    {
      title:"Rohitha"
    },
    {
      title:"Arun"
    },
    {
      name:"Suma"
    },
    {
      name:"Sharif"
    },
    {
      name:"Sai Teja"
    },
    {
      name:"Suman Veluru"
    }
    
  ]
  return (
    <div>
      {
        array.map((cdcd) =><h1>{cdcd.title}</h1>)
      }
     
    </div>
  )
}
