import React, { useState } from 'react'
import { getToken, proceedForLogin, storeToken } from '../rest_calls/allRestCalls';
import { NavLink, useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigator = useNavigate();

    function loginStudent(e) {
        e.preventDefault();

        let student = {
            "username": username,
            "password": password
        }
        console.log(student)
        proceedForLogin(student).then((response) => {
            console.log(response.data)

            let token = "Basic " + window.btoa(student.username + ':' + student.password)
            storeToken(token)
            console.log(getToken())

            navigator('/welcome')
        }).catch((error) => {
            console.log(error)
        })
    }


    return (
        <>
            <div className='container'>
                <br /><br />
                <div className='card'>
                    <div className='card-header'>
                        <h1 className='text-left'>Login Page</h1>
                    </div>
                    <div className='card-body'>
                        <form>
                            <label htmlFor='username'>Username</label>
                            <input
                                type='text'
                                id='username'
                                placeholder='Enter Username'
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }} />
                            <br /><br />
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                id='password'
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}></input>
                            <br /><br />
                            <button onClick={(e) => loginStudent(e)}>Submit</button>
                            <br />
                            <NavLink to={"/register"}>Register</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage