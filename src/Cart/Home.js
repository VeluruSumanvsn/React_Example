import React from 'react'
import {Link} from 'react-router-dom'
export const Home = () => {
  return (
    <div>
        <h2>This is home component</h2>
        <Link to='Dashboard'>Dashboard</Link> <br />
        <Link to='ContactUs'>ContactUs</Link>
    </div>
  )
}
