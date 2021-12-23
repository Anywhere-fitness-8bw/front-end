import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
// import formSchema from './validation/formSchema';
// import * as yup from 'yup';
import { useEffect, useState } from 'react';

import ItemsList from './components/ItemsList'

const initialFormValues = {

  email: '',  
  crossfit: false,
  powerlifting: false,
  yoga: false,
  zumba: false
}

const initialFormErrors = {
  email: '',
}

function App() {
  const [member, setMember] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState([])       // boolean

  const getMember = () => {
    axios.get('apiKey') //..........Api key goes here 
      .then(resp => {
        getMember(resp.data);                           //...................get Data code here..............................
      }).catch(err => console.error(err))
  }
  
  const postNewClassMember = newClassMember => {   
    //    helper to [POST] `newMember` to `api key`
    axios.post('apiKey', newClassMember)
      .then(resp => {
        setMember([ resp.data, ...member ]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }
  
  // // const validate = (name, value) => {
  // //   yup.reach(schema, name)
  // //     .validate(value)
  // //     .then(() => setFormErrors({ ...formErrors, [name]: '' }))
  // //     .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  // // }
  
  // const inputChange = (name, value) => {
  //   validate(name, value);
  //   setFormValues({
  //     ...formValues,
  //     [name]: value 
  //   })
  // }
  
  const formSubmit = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      civil: formValues.civil.trim(),
      hobbeis: ['crossfit', 'powerlifting', 'zumba', 'yoga'].filter(hobby => !!formValues[hobby])
    }
    postNewClassMember(newMember);
  }
  
  useEffect(() => {
    getMember();
  }, [])
  
  // useEffect(() => {
  //   schema.isValid(formValues).then(valid => setDisabled(!valid))
  // }, [formValues])

  return (
    <div className="App">
      <ItemsList 
        values={formValues}
        // change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  );
}

export default App;
