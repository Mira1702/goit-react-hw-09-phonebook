import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../../Redux/auth/auth-operations';
import styles from './Login.module.css';

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onLogin(this.state);

        this.setState({ email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div className={styles.loginDiv}>
                <h1 className={styles.loginHeader}>Login</h1>
                <form
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                    className={styles.loginForm}
                >
                    <label className={styles.loginLabel}>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className={styles.loginLabel}>
                        Пароль
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit" className={styles.loginButton}>
                        Войти
                    </button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    onLogin: authOperations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);
