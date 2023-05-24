import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'


const Home = () => {
  const usenavigate = useNavigate();
  // useEffect(()=>{
  //     let username = sessionStorage.getItem('username');
  //     if(username===null || username===''){
  //         usenavigate('/login')
  //     }
  // })

  return (

    <div class="grid-container">
      <div class="grid-item" id="item1">
        <img src={'brain.png'} width={'278px'} height={'197px'} />
        <h3>Brainny buddies</h3>
        <div class="navigacija">
          <a href='#'>Home</a>
          <a href='#'>Lesson Plans</a>
          <a href='#'>Quiz</a>
        </div>
      </div>
      <div class="grid-item" id="item2">
        <a href='#'>MK</a>
        <a href='#'>EN</a>
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
      <div class="grid-item" id="item3">
        <img src={'../kids.png'} width={'700px'} height={'505px'} />
      </div>
      <div class="grid-item" id="item4">
        <p>Limitless world of Learning</p>
        <p>Do you want your child to love learning?
          Are you a teacher or a parent?
          Then this page provides you with many engaging,
          interactive methods to learn. Get started now!</p>
      </div>
    </div>
  )

}

export default Home