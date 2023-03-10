import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import {  onValue, ref ,set } from 'firebase/database'
import { useLocation, useParams } from 'react-router-dom'

function Contestant() {

  const [token, setToken] = useState()
  const params = useParams()
  console.log(params.id)
  

  useEffect(()=>{
    
    const query = ref(db, "token")
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      setToken(data.token)


      

      Notification.requestPermission().then((perm)=>{
        if(perm=="granted"){
            if (params.id-data.token<5){
              const audio = new Audio('src/utils/Notification - Notification.mp3');
              audio.play();
              const notification = new Notification("Mazerunner", {
                body: 'hurry up',
                
              })
            }
        }else{

        }
      })
    });
   
  
  },[])
  return (
    <div className='h-100 d-flex justify-content-start align-items-center' style={{flexDirection:'column'}}>
      <h2 className='text-center pt-3'>Mazerunner</h2>
    <div className='contestant h-100 d-flex justify-content-center align-items-center'>
      <p className='text pb-0 m-0'>Token no <span className='token'>{token}</span> is in the maze..</p>
    </div>
    </div>
  )
}

export default Contestant