import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => {
    return (
        <div className={styles.homeDiv}>
            <h1 className={styles.homeHeader}>
                Привет! Я твоя телефонная книга{' '}
                <span role="img" aria-label="Иконка приветствия">
                    🚀
                </span>
            </h1>
        </div>
    );
};

export default HomeView;
