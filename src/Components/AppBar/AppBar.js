import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import * as authSelectors from '../../Redux/auth/auth-selectors';
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
    <header className={styles.header}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
);

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
