import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import schema from './validation/FormSchema';
import * as yup from 'yup';
import { useEffect, useState } from 'react';

import ItemsList from './components/ItemsList'

const initialFormValues = {

  email: '',  
  hiking: false,
  reading: false,
  coding: false,
}

const initialFormErrors = {
  email: '',
}

function App() {

  const [friends, setFriends] = useState(initialFriends)          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  const getFriends = () => {
    axios.get('apiKey') //..........Api key goes here 
      .then(resp => {
        setFriends(resp.data);
      }).catch(err => console.error(err))
  }
  
  const postNewFriend = newFriend => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
    //    and regardless of success or failure, the form should reset
    axios.post('http://buddies.com/api/friends', newFriend)
      .then(resp => {
        setFriends([ resp.data, ...friends ]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }
  
  const formSubmit = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      civil: formValues.civil.trim(),
      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
      hobbies: ['hiking', 'reading', 'coding'].filter(hobby => !!formValues[hobby])
    }
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
    postNewFriend(newFriend);
  }
  
  useEffect(() => {
    getFriends()
  }, [])
  
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <ItemsList 
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
