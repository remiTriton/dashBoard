import GoogleLogin from 'react-google-login';
import React, { useState, useEffect } from 'react';


export default function Gmail() {
    const [results, setArticles] = useState([]);
    const [messages, setMessages] = useState({});
    const [token, setToken] = useState({});

    useEffect(() => {
        const fetchHolidays = async () => {
            const response = await fetch('https://cors-anywhere.herokuapp.com/https://www.googleapis.com/gmail/v1/users/me/messages/', {
                headers: new Headers({
                    Authorization: 'Bearer ya29.a0ARrdaM8j5ldfmfUs3Lj64c8QJd_s7JUjBtlJ_EjGIKfJ6XVHeymeTHzyzPfyrA3QEMD8L3UYNHmRLF7cQNzIIMO7p1SCy61mqsC3vg5TF8slBwbNKIVjUMAQ8uF2eIAj0o84Z3rDVyAH9EeAosbx0U2gINOL'
                    
                })
            })
            const r = (await response.json()).messages;
            let i = r.map((e) => e.id);
            setArticles(i);
            console.log(i);
            const res = await fetch('https://cors-anywhere.herokuapp.com/https://www.googleapis.com/gmail/v1/users/me/messages/' + i.slice(2, 3), {
                headers: new Headers({
                    Authorization: 'Bearer ya29.a0ARrdaM9t5DeSL09EpCxBvPgT5RBXpCRMZy_kUFiTU-UYRyhUBwMslQ01MYFQu_6W4yEiuiZWT-TgBqOjd7T1X1GkHNl7EpfzDd-qo45d1yhnFSinAGlmDKJIEqMhtFTyIogOgWQj5xUZowR_l-dvG41KuSX3'
                })
            })
            const a = (await res.json()).snippet
            setMessages(a);
            console.log(a);

            const res2 = await fetch('https://cors-anywhere.herokuapp.com/https://www.googleapis.com/gmail/v1/users/me/messages/' + i.slice(2, 3), {
                headers: new Headers({
                    Authorization: 'Bearer ya29.a0ARrdaM9t5DeSL09EpCxBvPgT5RBXpCRMZy_kUFiTU-UYRyhUBwMslQ01MYFQu_6W4yEiuiZWT-TgBqOjd7T1X1GkHNl7EpfzDd-qo45d1yhnFSinAGlmDKJIEqMhtFTyIogOgWQj5xUZowR_l-dvG41KuSX3'
            })
            })
            const b = (await res2.json()).snippet
            setMessages(b);
            console.log(b);

            const res3 = await fetch('https://cors-anywhere.herokuapp.com/https://www.googleapis.com/gmail/v1/users/me/messages/' + i.slice(2, 3), {
                headers: new Headers({
                    Authorization: 'Bearer ya29.a0ARrdaM9t5DeSL09EpCxBvPgT5RBXpCRMZy_kUFiTU-UYRyhUBwMslQ01MYFQu_6W4yEiuiZWT-TgBqOjd7T1X1GkHNl7EpfzDd-qo45d1yhnFSinAGlmDKJIEqMhtFTyIogOgWQj5xUZowR_l-dvG41KuSX3'
                })
            })
            const c = (await res3.json()).snippet
            setMessages(c);
            console.log(c);

            const res4 = await fetch('https://cors-anywhere.herokuapp.com/https://www.googleapis.com/gmail/v1/users/me/messages/' + i.slice(2, 3), {
                headers: new Headers({
                    Authorization:  'Bearer ya29.a0ARrdaM9t5DeSL09EpCxBvPgT5RBXpCRMZy_kUFiTU-UYRyhUBwMslQ01MYFQu_6W4yEiuiZWT-TgBqOjd7T1X1GkHNl7EpfzDd-qo45d1yhnFSinAGlmDKJIEqMhtFTyIogOgWQj5xUZowR_l-dvG41KuSX3'
                })
            })
            const d = (await res4.json()).snippet
            setMessages(d);
            console.log(d);
        }

        fetchHolidays();
    }, []
    )

    const responseGoogle = (responselogin) => {
        let tok = responselogin.accessToken;
        setToken(tok);
    };

    console.log(token);
    return (

        <div>
            <div>

            </div>

            <GoogleLogin
                clientID="805765931043-tdceekai04uo8mkavidkimne67duqt9f.apps.googleusercontent.com"
                buttonText="Login"
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                onSuccess={responseGoogle}
            ></GoogleLogin>

            {/* {messages} */}

        </div>
    )



}