import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
    <div>
        <NavLink to="/register" exact className={styles.navigation}>
            Регистрация
        </NavLink>
        <NavLink to="/login" exact className={styles.navigation}>
            Логин
        </NavLink>
    </div>
);

export default AuthNav;
