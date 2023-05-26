import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './login.css';
import { HiPlusCircle } from 'react-icons/hi'
import { HiMinusCircle } from 'react-icons/hi'
import { RiCloseCircleFill } from 'react-icons/ri'

const Login = ({ toggleLogin, usenavigate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            let inputobj = {
                "username": username,
                "password": password
            };
            fetch("https://localhost:44428/api/member/Authenticate", {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    console.log('Login failed, invalid credentials');
                } else {
                    console.log('Success');
                    console.log(resp);
                    sessionStorage.setItem('username', username);
                    sessionStorage.setItem('jwttoken', resp.jwtToken);
                    sessionStorage.setItem('role', resp.role);
                    toggleLogin();
                    usenavigate('/');
                }
            }).catch((err) => {
                console.log('Login Failed due to :' + err.message);
            });
        }
    }

    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            console.log('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            console.log('Please Enter Password');
        }
        return result;
    }

    return (
        <div className="login-dialog">
            <div className='login-content'>
                <div className='sign-up'>
                    <div className='icons'>
                        <HiPlusCircle className='icon' />
                        <HiMinusCircle className='icon' />
                        <RiCloseCircleFill className='icon' onClick={toggleLogin} />
                    </div>
                    <h2>Log in</h2>
                </div>
                <div>
                    <form onSubmit={ProceedLoginusingAPI}>
                        <div className='content'>
                            <input
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                className="form-control"
                                placeholder="Username"
                            />

                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="form-control"
                            />
                            <button type="submit">Login</button>
                            <h3>Not a Brainy buddies member?</h3>
                            <Link className="btn btn-success" to={'/register'}>Create an Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
