import './App.css';
import React, { useState, useEffect } from 'react';
import {Switch, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ClassList from './components/ClassList';
import Logout from './components/Logout';
import schema from './validation/FormSchema';
import axios from 'axios';
import PrivateRoute from './components/PrivateRoute';
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
          <div className='nav-links'>
              <Link to='/'>Home</Link>
              <Link to='/login'>Login</Link>
              <Link to= '/classlist'>Classes</Link>
          </div>
        </header>
        <Switch>
          <Route exact path='/login'>
            <LoginForm
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}
            />
          </Route>

          <PrivateRoute exact path = '/classlist' component={ClassList} />
          <Route exact path ='/logout' >
            <Logout />
          </Route>
          

        </Switch>
    </div>
  );
}

export default App;
