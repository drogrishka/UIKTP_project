// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import './login.css';
// import { HiPlusCircle } from 'react-icons/hi'
// import { HiMinusCircle } from 'react-icons/hi'
// import { RiCloseCircleFill } from 'react-icons/ri'

// const Login = ({ toggleLogin }) => {
//     const [username, usernameupdate] = useState('');
//     const [password, passwordupdate] = useState('');

//     const usenavigate = useNavigate();

//     useEffect(() => {
//         sessionStorage.clear();
//     }, []);

//     const ProceedLoginusingAPI = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             let inputobj = {
//                 "username": username,
//                 "password": password
//             };
//             fetch("https://localhost:44428/api/member/Authenticate", {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 body: JSON.stringify(inputobj)
//             }).then((res) => {
//                 return res.json();
//             }).then((resp) => {
//                 console.log(resp)
//                 if (Object.keys(resp).length === 0) {
//                     console.log('Login failed, invalid credentials');
//                 } else {
//                     console.log('Success');
//                     console.log(resp);
//                     sessionStorage.setItem('username', username);
//                     sessionStorage.setItem('jwttoken', resp.jwtToken);
//                     sessionStorage.setItem('role', resp.role);
//                     usenavigate('/')
//                 }
//             }).catch((err) => {
//                 console.log('Login Failed due to :' + err.message);
//             });
//         }
//     }
//     const validate = () => {
//         let result = true;
//         if (username === '' || username === null) {
//             result = false;
//             console.log('Please Enter Username');
//         }
//         if (password === '' || password === null) {
//             result = false;
//             console.log('Please Enter Password');
//         }
//         return result;
//     }
//     return (
//         <div class='container'>
//             <div>
//                 <div class='sign-up'>
//                     <div class='icons'>
//                         <HiPlusCircle class='icon' />
//                         <HiMinusCircle class='icon' />
//                         <RiCloseCircleFill class='icon' onClick={toggleLogin}/>
//                     </div>
//                     <h2>Log in</h2>
//                 </div>
//                 <div>
//                     <form onSubmit={ProceedLoginusingAPI}>
//                         <div class='content'>
//                             <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control" placeholder="Username"></input>

//                             <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
//                             <button type="submit">Login</button> 
//                             <h3>Not a Brainy buddies member?</h3>
//                             <Link className="btn btn-success" to={'/register'}>Create an Account</Link>
//                         </div>

//                     </form >
//                 </div >
//             </div >
//         </div>
//     );
// }

// export default Login;