import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import {  onValue, ref  } from 'firebase/database'
import {  useParams } from 'react-router-dom'
import { Audio } from 'react-loader-spinner'

function Contestant() {

  const [token, setToken] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()
  

  useEffect(()=>{
    
    const query = ref(db, "maze")
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      console.log(parseInt(params.id)-data)
      setToken(data)
      setIsLoading(false)


      

      Notification.requestPermission().then((perm)=>{
        if(perm==="granted"){
            if (parseInt(params.id)-data<5){
              console.log("hiih")
              const audio = new Audio('src/utils/Notification - Notification.mp3');
              audio.play();
              const notification = new Notification("Mazerunner", {
                body: 'hurry up',
                
              })
              notification.title('maze')
            }
        }else{

        }
      })
    });
   
  
  },[])

  if (isLoading){
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
      <div className='h-100 d-flex justify-content-start align-items-center' style={{flexDirection:'column'}}>
        <h2 className='text-center pt-3'>Mazerunner</h2>
      <div className='contestant h-100 d-flex justify-content-center align-items-center'>
        <p className='text pb-0 m-0'>Token no <span className='token'>{token}</span> is in the maze..</p>
      </div>
      </div>
    )
  }
}

export default Contestant