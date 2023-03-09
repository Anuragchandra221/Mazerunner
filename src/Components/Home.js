import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import {  onValue, ref  } from 'firebase/database'


function Home() {
  const [input, setInput] = useState()
  const [token, setToken] = useState([])

  useEffect(()=>{
    const query = ref(db, "token")
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setToken(data.token)
    });
    
  
  },[])
  return (
    <div>
      <p className='text pb-0 m-0'>Token no {token} is in the maze..</p>
      <input placeholder='Enter your token number...' type="text" onChange={(e)=>{setInput(e.target.value)}} />
      <Link to={`${input}/`}><button>Go</button></Link>
    </div>
  )
}

export default Home