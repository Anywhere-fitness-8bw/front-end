import React, {useEffect} from 'react';
import axiosWithAuth from '../axiosWithAuth'
import { useHistory } from 'react-router-dom';

const Logout = (props) => {        
    const { push } = useHistory();
    //This useEffect allows us to logout when mounted. Redirects us to /login.
    useEffect(()=> {
        axiosWithAuth()
            .post('/logout')
            .then(res => {
                localStorage.removeItem('token');
                push('/login');
            })
            .catch(err => {
                console.log(err)
            });
    }, []);
    return(<div>
        <p>You are Logged Out</p>
    </div>);
}

export default Logout;