import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import {  onValue, ref ,set } from 'firebase/database'
import { Audio } from 'react-loader-spinner'


function Trans() {
  const [token, setToken] = useState([])
  const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{
  const query = ref(db, "trans")
  return onValue(query, (snapshot) => {
    const data = snapshot.val();
    console.log(data)
    setToken(data)
    setIsLoading(false)
  });
  

},[])
let data
const getData = ()=>{
  const query = ref(db, "trans")
  return onValue(query, (snapshot) => {
    data = snapshot.val();
    
  });
}

const submit = (e)=>{
  e.preventDefault();
  console.log('hi')
  getData();
  console.log(data)

  set(ref(db, 'trans' ),data+1)
}
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
      <div className='admin h-100 d-flex justify-content-start align-items-center' >
        <h2 className='text-center pt-3'>Transilvania</h2>
        <div className='h-100 d-flex justify-content-center align-items-center' style={{flexDirection:'column'}}>
            <p className='text pb-0 m-0 mb-3'>Token no <span className='token'>{token}</span> is in transilvania.</p>
              <button className='button' onClick={submit}>ADd next</button>
        </div>
        
        
      </div>
    )
  }


}

export default Trans