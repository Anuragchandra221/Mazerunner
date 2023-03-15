import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import {  onValue, ref  } from 'firebase/database'
     

import { Audio } from 'react-loader-spinner'


function Home() {
  const [input, setInput] = useState()
  const [token, setToken] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [trans, setTrans] = useState()
  const [state, setState] = useState(0)

  const getTrans = ()=>{
    return onValue(ref(db, "trans"), (snapshot) => {
      const data = snapshot.val();
      setTrans(data)
    });
  }

  useEffect(()=>{
    const query = ref(db, "maze")
    getTrans()
    console.log(trans)
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setToken(data)
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
        <h2 className='text-center pt-3'>Vyvidh 23</h2>
        <div className='home h-100 d-flex justify-content-center align-items-center' >
          <div className='Gamediv'>
            <button className={state==0?'btn underline':'btn'} onClick={()=>{
              setState(0)
            }}>Maze</button>
            <button className={state==1?'btn underline':'btn'} onClick={()=>{
              setState(1)
            }}>Transilvania</button>
          </div>
            <p className='text pb-0 m-0 mb-4 mt-3'>Token no <span className='token'>{state==0?token:trans}</span> is in {state==0?" the maze..":"transilvania..."}</p>
            <div className='inputdiv'>
  
            {/* <input className='input mb-3' placeholder='Enter your token number...' type="text" onChange={(e)=>{setInput(e.target.value)}} />
            <Link to={`${input}/`} className="button" >Go</Link> */}
            </div>
          
        </div>
      </div>
    )
  }
}

export default Home