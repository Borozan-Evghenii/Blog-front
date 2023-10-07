import {FC, useState} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const Login:FC = () => {
    const [login, setLogin] =useState({})
    const{register,handleSubmit} = useForm()
    console.log(login)
    return (
        <form
            onSubmit={handleSubmit((data)=> {
                setLogin(data)
            } )}
            style={{display: "flex", flexDirection: 'column', alignItems: "start"}}>
            <header>
                <h3>Login</h3>
            </header>
            <label >Username</label>
            <input {...register('username')} type="text"/>
            <label>Password</label>
            <input {...register('password')} type="password"/>
            <button type={'submit'}>Submit Form</button>
            <Link to={'/auth/register'}>Register</Link>
        </form>
    );
};

export default Login;