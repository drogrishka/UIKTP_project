import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'
import Login from './login/LoginComponent'
import Register from './register/RegisterComponent'

const Home = () => {
  const usenavigate = useNavigate();
  // useEffect(()=>{
  //     let username = sessionStorage.getItem('username');
  //     if(username===null || username===''){
  //         usenavigate('/login')
  //     }
  // })
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const username= sessionStorage.getItem('username');


  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };
  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (

    <div class="grid-container">
      <div class="grid-item" id="item1">
        <img src={'https://images.moqups.com/repo/OR2Q9Ms0q16wN34fzzxyCAbkaoPHciku/p_g7o1tO0thQUwW49lMDO5OYt281SNRwjN/YEOAvKL5L5YOg47cZQOcpgKJvFIGsfdm.png?Expires=1685447509&Key-Pair-Id=K1TPUF1X6HKIYU&Signature=J1rW7eJ-~r1166R6-LeL9YpPKrMnoAgONjjUjYuldEI3nPuq08AFsnoYrjf9X1h1BscZF2835ORJmn0caYvn7HOv9c3I83n~1iMRYOPKHeOKZmWo6yuen8LL1e6akxdyN8evX5y-KQC7Ut2asY~t12ZVodRdRYvxuh4jy6Nul9gyzZhBzmhqKtXT330gPl1QjD9e4zP-94rwTGHwjkPZFfQ85geffuhfEzV-PqUtJTJxCPSAXTq~NONhcGozVD7dOEjzcPUc95clFscVR0DTVvM-4pbWIYP9MMBXWnMhiKLtxvlJ7I6Z6vi8o2csmhuFuUwwXygaI-qdyHl2azSgCg__'} width={'278px'} height={'197px'} />
        <h3>Brainy buddies</h3>
        <div></div>
        <div class="navigacija">
          <a href='#'>Home</a>
          <a href='#'>Lesson Plans</a>
          <a href='#'>Quiz</a>
        </div>
      </div>
      <div class="grid-item" id="item2">
        <div></div>
        <div class='lang'>
          <a href='#'>MK</a>
          <a href='#'>EN</a>
        </div>
        <div></div>
        <div class='sign up'>
          {username ? <p>Hello, {username}</p> : (
            <>
              <button onClick={toggleLogin}>Log In</button>
              <button onClick={toggleSignUp}>Sign Up</button>
            </>
          )}
        </div>

      </div>
      <div class="grid-item" id="item3">
        <img src={'https://images.moqups.com/repo/OR2Q9Ms0q16wN34fzzxyCAbkaoPHciku/p_g7o1tO0thQUwW49lMDO5OYt281SNRwjN/P3PHgqVM3a5fA5Hp1Sfpb6eMwhn05Zzt.png?Expires=1685447509&Key-Pair-Id=K1TPUF1X6HKIYU&Signature=DQb7PnJe8wjIb6uaG4lOzjPu4McqMpaXLFZISBm4zonJRCqPyffFmObIgStvhIaB~yFQMsCNM8Kl2qS8am5t-SEXpx0MrbTg7o2f4kyNMNDI-X~k~KNvztJSop~D6lkcVxGIXU5ZOkmf6cOIsItdzGrUL2uxJPsnop1x9UtkH88I29QHllEg3N76FHvDURMxtOqJWDKByRThkVv7bMc286MEGM8OxlylCL6bicrxKmcb3o8zljrY~5pZ3mPEMkg-TIFIrYHGW0zt6XYAqRE740o306WBklKe3s9kqdUFuxI-FCyVC9reitmALSmqqUIjUX5dtu7WhvRYgkwn~7y3NA__'} width={'700px'} height={'505px'} />
      </div>
      <div class="grid-item" id="item4">
        <p>Limitless world of Learning</p>
        <p>Do you want your child to love learning?
          Are you a teacher or a parent?
          Then this page provides you with many engaging,
          interactive methods to learn. Get started now!</p>
      </div>
      {showLogin && <Login toggleLogin={toggleLogin} usenavigate={usenavigate} />}
      {showSignUp && <Register toggleSignUp={toggleSignUp} usenavigate={usenavigate} />}
    </div>
  )

}

export default Home