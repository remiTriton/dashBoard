import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import styles from './style.module.css';

export default function Register() {
    let history = useHistory();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(false);
    const [v_password, setV_password] = useState(false);
    const [error, setError] = useState('');

    const postData = (e) => {       

        e.preventDefault()
        console.log('clk')
        if (password !== v_password) {
            setError("Your passwords must matchs");
            return;
        } else {
            axios.post(`http://localhost:3000/register`, {
                username,
                email,
                password
            }).then(() => {console.log('')
                history.push('/login')
            }).catch(error => {console.log('smtg_went_wrong');})}
    }
    return (

        <form className={styles.forM}>
            <div className='form-group'>
                <label>Username</label>
                <input placeholder='Username' id='username' className='form-control' onChange={(e) => setUsername(e.target.value)} /></div>
            <div className='form-group'>
                <label>Email</label>
                <input placeholder='Email' type='email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input placeholder='Password' className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Confirm password</label>
                <input placeholder='Password' className='form-control' type='password' onChange={(e) => setV_password(e.target.value)} />
            </div>                <button onClick={postData} className='btn btn-success' type='submit'>Submit</button>
        </form>

    )
}