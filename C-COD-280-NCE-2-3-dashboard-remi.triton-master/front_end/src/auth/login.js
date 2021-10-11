import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styles from './style.module.css';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAuth, setAuth] = useState(false)
    const [user, setUser] = useState('');
    const history = useHistory();


    const login = () => {
        axios.post('http://localhost:3000/auth', {
            email,
            password
        }).then((response) => {
            if (response.data.token) {
                localStorage.setItem('user_token', response.data.token)
                localStorage.setItem('id', response.data.id)
                console.log(response.data.id)
                setUser(response.data.user);
                setAuth(true);
                history.push('/')
            }
        })
    }

    return (
        <div className={styles.loginForm}>
            {!localStorage.getItem('user_token') && (

                <div className='col-sm-6 offset-sm-3'>
                    <input type='text' placeholder='email'
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control' /><br />
                    <input type="password" placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control' />
                    <br />
                    <button onClick={login} className='btn btn-primary'>Login</button>
                </div>)}
                {localStorage.getItem('id')&&(
                        <div>You are already logged</div>
                )}
        </div>
    )
}