import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(false);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setUsername(localStorage.getItem('First Name'));
        setEmail(localStorage.getItem('Last Name'));
        setPassword(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:3000/users/${id}`, {
            username,
            email,
            password
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Username</label>
                    <input placeholder='First Name' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Last Name' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                    <input placeholder='Last Name' value={password} type='password' onChange={(e) => setPassword(e.target.value)}/>                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}