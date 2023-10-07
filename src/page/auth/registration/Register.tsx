import {FC, useState} from 'react';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const Register:FC = () => {
    const [data, setData] = useState({})
    const {register, handleSubmit} = useForm()
    console.log(data)
    return (
        <form onSubmit={handleSubmit(data => setData(data))}
            style={{display: "flex", flexDirection: 'column', alignItems: "start"}}>
            <header>
                <h3>Register</h3>
            </header>
            <label >Username</label>
            <input  {...register('username')}type="text"/>
            <label>Password</label>
            <input {...register('password')} type="password"/>
            <button type={'submit'}>Submit Form</button>
            <Link to={'/auth/login'}>login</Link>
        </form>
    );
};

export default Register;