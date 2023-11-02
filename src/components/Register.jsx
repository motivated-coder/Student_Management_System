import React, { useState } from 'react'
import { register } from '../rest_calls/allRestCalls'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')

    const navigator = useNavigate();

    const registerStudent = (e) => {
        e.preventDefault();
        let student = {
            "firstname": firstname,
            "lastname": lastname,
            "username": username,
            "password": password,
            "email": email,
            "roles": [{
                "role": role
            }]
        }
        console.log("student ", student)
        console.log("calling register api")
        register(student)
            .then((response) => {
                console.log(response.data)
                navigator("/login")
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <div className='container'>
                <br /><br />
                <div className='card'>
                    <div className='card-header'>
                        <h1>Register</h1>
                        <div className='card-body'>
                            <form autoComplete='on'>
                                <label htmlFor='firstname'>FirstName</label>&nbsp;
                                <input type='text' id='firstname' onChange={(e) => setFirstname(e.target.value)} />
                                <br /><br />
                                <label htmlFor='lastname'>LastName</label>&nbsp;
                                <input type='text' id='lastname' onChange={(e) => setLastname(e.target.value)} />
                                <br /><br />
                                <label htmlFor='username'>Username</label>&nbsp;
                                <input type='text' id='username' onChange={(e) => setUsername(e.target.value)} />
                                <br /><br />
                                <label htmlFor='password'>Password</label>&nbsp;&nbsp;
                                <input type='password' id='password' onChange={(e) => setPassword(e.target.value)} />
                                <br /><br />
                                <label htmlFor='email'>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type='text' id='email' onChange={(e) => setEmail(e.target.value)} />
                                <br /><br />
                                <label htmlFor='role'>Role</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type='text' id='role' onChange={(e) => setRole(e.target.value)} />
                                <br /><br />
                                <button onClick={(e) => registerStudent(e)}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Register


