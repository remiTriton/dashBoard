import React from 'react';
import {Redirect} from 'react-router-dom';

export default function logout(){

    const logout = () => {
        localStorage.clear()
    return(
    <Redirect to='/' />
)    }
    return (<div>
        <button onClick={logout}>Disconnect</button> </div>
    )
}