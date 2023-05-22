import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const usenavigate = useNavigate();
    useEffect(()=>{
        let username = sessionStorage.getItem('username');
        if(username===null || username===''){
            usenavigate('/login')
        }
    })
  return (
    <div>HomeComponent</div>
  )
}

export default Home