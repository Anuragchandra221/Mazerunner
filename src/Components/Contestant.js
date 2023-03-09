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
              const notification = new Notification("Mazerunner", {
                body: 'hurry up',
                
              })
            }
        }
      })
    });
   
  
  },[])
  return (
    <div>
      <p className='text pb-0 m-0'>Token no {token} is in the maze..</p>
    </div>
  )
}

export default Contestant