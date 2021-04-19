import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => (
    <nav>
        <NavLink to="/" exact className={styles.navigation}>
            Главная
        </NavLink>

        <NavLink to="/contacts" exact className={styles.navigation}>
            Контакты
        </NavLink>
    </nav>
)

export default Navigation
