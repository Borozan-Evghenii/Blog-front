import {FC} from 'react';
import {Outlet} from "react-router-dom";
import style from './AuthLayout.module.scss'

const AuthLayout:FC = () => {
    return (
        <div className={'container'}>
            <div className={style.formContainer}>
                <Outlet/>
            </div>

        </div>
    );
};

export default AuthLayout;