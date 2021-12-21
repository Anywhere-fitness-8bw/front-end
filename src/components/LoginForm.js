import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const initialCreds = {
    username: '',
    password: ''
} 

export default function LoginForm(props) {
    const [creds, setCreds] = useState(initialCreds)
    const {errors, disabled} = props;
    const {push} = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            push('/classes')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const handleChange = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <h1>Welcome to Anywhere Fitness!</h1>
            <div className='form-container inputs'>
                <label>Username
                    <input
                        onChange={handleChange}
                        name='username'
                        type='text'
                    />
                </label>
                <label>Password
                    <input
                        onChange={handleChange}
                        name='password'
                        type='password'
                    />
                </label>
            </div>
            <div className='form-container submit'>
                <button>Submit</button>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
        </form>
    )
}