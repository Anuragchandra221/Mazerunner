import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import {  onValue, ref  } from 'firebase/database'
     

import { Audio } from 'react-loader-spinner'


function Home() {
  const [input, setInput] = useState()
  const [token, setToken] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const query = ref(db, "token")
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setToken(data.token)
      setIsLoading(false)
    });
    
  
  },[])
  if(isLoading){
    return (
      <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <Audio
          height="80"
          width="80"
          radius="9"
          color="#CBE4DE"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    )
  }else{
    return (
      <div className='home h-100 d-flex justify-content-start align-items-center' style={{flexDirection:'column'}}>
        <h2 className='text-center pt-3'>Mazerunner</h2>
        <div className='home h-100 d-flex justify-content-center align-items-center' >
            <p className='text pb-0 m-0 mb-4'>Token no <span className='token'>{token}</span> is in the maze..</p>
            <div className='inputdiv'>
  
            <input className='input mb-3' placeholder='Enter your token number...' type="text" onChange={(e)=>{setInput(e.target.value)}} />
            <Link to={`${input}/`} className="button" >Go</Link>
            </div>
          
        </div>
      </div>
    )
  }
}

export default Home