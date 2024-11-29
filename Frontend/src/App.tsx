import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Donate from './Donate'
import WPB from './WPB_Image'
import './App.css'



const App: React.FC = () => {
  const [clickedLeft, setClickedLeft] = useState<boolean>(false)
  const [clickedRight, setClickedRight] = useState<boolean>(false)

  function handleMoveLeft() {
    setClickedLeft(true);
    setClickedRight(false);
  }

  function handleMoveRight() {
    setClickedRight(true);
    setClickedLeft(false);
  }

  return (
    <>
      <header className='fixed top-0 left-0 right-0 '>
        <div className='bg-gradient-to-l from-teal-100 to-fuchsia-100 rounded flex justify-evenly font-sans p-6'>
          <p className='text-xl'>🌴🦩</p>
          <Link to='/Home' className=' hover:scale-125 p-2 font-bold '> Home</Link>
          <Link to='/About' className='hover:scale-125 p-2 font-bold'>About Us</Link>
          <Link to='/Events' className='hover:scale-125 p-2 font-bold'>Events</Link>
          <Link to='/Contact' className='hover:scale-125 p-2 font-bold'> Contact Us</Link>
          <Donate />
        </div>

      </header>
      <main className='border-gray-200' >
        <div className='flex flex-row p-40 bg-white'>
          <WPB />
          <div className='p-2'>
            <h1 className='text-center font-bold text-lg'>Title</h1>
            <p className='py-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laborum repudiandae excepturi reprehenderit inventore id doloribus necessitatibus quae, hic dicta a nemo quisquam porro ea culpa dolorem esse obcaecati optio?</p>
          </div>
        </div>

        <div className='bg-gray-50 p-40 px-1 content-center flex flex-row border-gray-200'>
          <button className='bg-white rounded-md shadow-md hover:outline outline-offset-2 outline-teal-200 font-bold' onClick={handleMoveLeft}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          </button>
          {!clickedLeft && !clickedRight && (<div className='p-3 '>
            <h3 className='text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam, voluptatum quas dolores dignissimos, sapiente itaque, inventore repellat et eius nulla voluptatibus cumque dolorem explicabo culpa accusamus quisquam illum id!</h3>
          </div>)}
          {clickedLeft && (<div className='p-3 -translate-x-3'>
            <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam, voluptatum quas dolores dignissimos, sapiente itaque, inventore repellat et eius nulla voluptatibus cumque dolorem explicabo culpa accusamus quisquam illum id!</h3>
          </div>)}

          {clickedRight && (<div className='p-3 translate-x-3'>
            <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ullam, voluptatum quas dolores dignissimos, sapiente itaque, inventore repellat et eius nulla voluptatibus cumque dolorem explicabo culpa accusamus quisquam illum id!</h3>
          </div>)}
          <button className='bg-white rounded-md shadow-md hover:outline outline-offset-2 outline-teal-200 font-bold' onClick={handleMoveRight}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          </button>
        </div>
      </main>

      <footer className='bg-gradient-to-l from-fuchsia-100 to-teal-100 rounded flex justify-evenly font-sans p-6'>
        <p> © 2025 ORGANIZATION TITLE , All Rights Reserved </p>
      </footer>
    </>
  )
}

export default App
