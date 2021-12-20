import './App.css';
import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm';
import schema from './validation/FormSchema';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
  username: '',
  password: '',
}

const initialFormErrors = {
  username: '',
  password: '',
}

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get('api goes here')
    .then(resp => {
      console.log(resp);
      setUsers(resp.data); //this might change based on the console.log above
    }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('api goes here', newUser)
    .then(resp => {
      console.log(resp);
      setUsers([ resp.data, ...users ]); //this might change based on the console.log above
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim()
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header className="header-container">
        <h1>Header goes here</h1>
      </header>
      <LoginForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
