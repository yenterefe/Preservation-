import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Link to='/Home'> Home</Link>
        <Link to='/About'>About Us</Link>
        <Link to='/Events'>Events</Link>
        <Link to='/Contact'> Contact Us</Link>
      </header>
      <main>
        <h1>Hello World</h1>

      </main>
    </>
  )
}

export default App
