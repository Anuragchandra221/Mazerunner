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
    <div className='home h-100 d-flex justify-content-start align-items-center' style={{flexDirection:'column'}}>
      <h2 className='text-center pt-3'>Mazerunner</h2>
      <div className='home  h-100 d-flex justify-content-center align-items-center' >
          <p className='text pb-0 m-0 mb-4'>Token no <span className='token'>{token}</span> is in the maze..</p>
          <div className='inputdiv'>

          <input className='input mb-3' placeholder='Enter your token number...' type="text" onChange={(e)=>{setInput(e.target.value)}} />
          <Link to={`${input}/`} className="button" >Go</Link>
          </div>
        
      </div>
    </div>
  )
}

export default Home