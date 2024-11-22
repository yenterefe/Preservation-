import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import './App.css'



const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header className='bg-teal-200 rounded shadow-md flex justify-evenly font-sans p-6'>
        <Link to='/Home' className=' hover:bg-teal-300'> Home</Link>
        <Link to='/About' className=' hover:bg-teal-400'>About Us</Link>
        <Link to='/Events' className=' hover:bg-teal-400'>Events</Link>
        <Link to='/Contact' className=' hover:bg-teal-400'> Contact Us</Link>
      </header>
      <main>
        <h1>Hello World</h1>

      </main>
    </>
  )
}

export default App
