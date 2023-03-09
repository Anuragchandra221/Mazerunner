import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Home() {
  const [input, setInput] = useState()
  return (
    <div>
      <input placeholder='Enter your token number...' type="text" onChange={(e)=>{setInput(e.target.value)}} />
      <Link to={`${input}/`}><button>Go</button></Link>
    </div>
  )
}

export default Home