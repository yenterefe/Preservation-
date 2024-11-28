import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Donate from './Donate'
import WPB from './WPB_Image'
//import './App.css'



const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header className='bg-teal-100 rounded shadow-md flex justify-evenly font-sans p-6'>
        <Link to='/Home' className=' hover:scale-125 p-2'> Home</Link>
        <Link to='/About' className='hover:scale-125 p-2'>About Us</Link>
        <Link to='/Events' className='hover:scale-125 p-2'>Events</Link>
        <Link to='/Contact' className='hover:scale-125 p-2'> Contact Us</Link>
        <Donate />
      </header>
      <main className='flex flex-row p-2 bg-fuchsia-100'>
        <WPB />
        <div className='p-2'>
          <h2>Welcome To West Palm Beach Heritage Trust</h2>
          <p className='py-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum repudiandae excepturi reprehenderit inventore id doloribus necessitatibus quae, hic dicta a nemo quisquam porro ea culpa dolorem esse obcaecati optio?</p>
        </div>
      </main>
    </>
  )
}

export default App
