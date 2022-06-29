import React from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Notiflix from 'notiflix';

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = event => {

        const cookies = new Cookies();

        event.preventDefault();
        
        const form = document.querySelector('form');
        
        const formData = new FormData(form);
        
        axios
        //   .post('https://app.stayaroom.ir/server/wp-json/jwt-auth/v1/token', formData, {
            .post('http://localhost/aroom/server/wp-json/jwt-auth/v1/token', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            validateStatus: function (status) {
                return status >= 200 && status < 500
            }
            })
            .then((res) => {
                
                let response = res.data;

                if(response.success) {

                    cookies.set('jwt', response.data.token, { path: '/' });

                    navigate('/dashboard', {replace: true});

                } else {
                    Notiflix.Notify.warning(response.message)
                }
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Username: 
            <input name="username" />
            </label>
            <label>
            Password: 
            <input name="password" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Login