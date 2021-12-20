import React from 'react';

export default function LoginForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }
    return (
        <form className='form-container' onSubmit={onSubmit}>
            <h1>Welcome to Anywhere Fitness!</h1>
            <div className='form-container inputs'>
                <label>Username
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                </label>
                <label>Password
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='password'
                    />
                </label>
            </div>
            <div className='form-container submit'>
                <button disabled={disabled}>Submit</button>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
        </form>
    )
}