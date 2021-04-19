import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authOperations from '../../Redux/auth/auth-operations';
import styles from './RegisterView.module.css';

class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onRegister(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <div className={styles.registerDiv}>
                <h1 className={styles.registerHeader}>Страница регистрации</h1>
                <form
                    onSubmit={this.handleSubmit}
                    autoComplete="off"
                    className={styles.registerForm}
                >
                    <label className={styles.registerLabel}>
                        Логин
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className={styles.registerLabel}>
                        Пароль
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label className={styles.registerLabel}>
                        Имя
                        <input
                            type="name"
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit" className={styles.registerButton}>
                        Отправить
                    </button>
                </form>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     onRegister: (data) => dispatch(authOperations.register(data)),
// });

const mapDispatchToProps = {
    onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
