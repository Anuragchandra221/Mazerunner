import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import {  onValue, ref ,set } from 'firebase/database'


function Admin() {
  const [token, setToken] = useState([])

useEffect(()=>{
  const query = ref(db, "token")
  return onValue(query, (snapshot) => {
    const data = snapshot.val();
    setToken(data.token)
  });
  

},[])
let data
const getData = ()=>{
  const query = ref(db, "token")
  return onValue(query, (snapshot) => {
    data = snapshot.val();
    
  });
}

const submit = (e)=>{
  e.preventDefault();
  console.log('hi')
  getData();
  console.log(data)

  set(ref(db, 'token/' ),{
    token: data.token+1
  })
}

  return (
    <div className='admin h-100 d-flex justify-content-start align-items-center' >
      <h2 className='text-center pt-3'>Mazerunner</h2>
      <div className='h-100 d-flex justify-content-center align-items-center' style={{flexDirection:'column'}}>
          <p className='text pb-0 m-0 mb-3'>Token no <span className='token'>{token}</span> is in the maze..</p>
            <button className='button' onClick={submit}>ADd next</button>
      </div>
      
      
    </div>
  )


}

export default Admin