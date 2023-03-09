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
    <div className='h-100' style={{position: 'relative'}}>
      <h4 className='text-center pt-3'>Mazerunner</h4>
      <div className='row h-100 d-flex align-items-center'>
        <div className='col-md-3 d-flex justify-content-center'>
            <button className='button' onClick={submit}>ADd next</button>
        </div>
        <div className='pl-5 col-md-9 d-flex justify-content-start'>
          <p className='text pb-0 m-0'>Token no {token} is in the maze..</p>
        </div>
      </div>
      
      
    </div>
  )


}

export default Admin