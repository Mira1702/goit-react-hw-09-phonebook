import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as authOperations from '../../Redux/auth/auth-operations';
import styles from './Login.module.css';

function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // const handleChange = (event) => {
    //     const { name, value } = event.currentTarget;

    //     switch (name) {
    //         case 'email':
    //             setEmail(value);
    //             break;

    //         case 'password':
    //             setPassword(value);
    //             break;
    //         default:
    //             return;
    //     }
    // };

    const reset = () => {
        setEmail('');
        setPassword('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(authOperations.login({ email, password }));

        // const user = { email, password };
        // dispatch(authOperations.login(user));

        reset();
    };

    return (
        <div className={styles.loginDiv}>
            <h1 className={styles.loginHeader}>Login</h1>
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className={styles.loginForm}
            >
                <label className={styles.loginLabel}>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label className={styles.loginLabel}>
                    Пароль
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <button type="submit" className={styles.loginButton}>
                    Войти
                </button>
            </form>
        </div>
    );
}

export default LoginView;

// class LoginView extends Component {
//     state = {
//         email: '',
//         password: '',
//     };

//     handleChange = ({ target: { name, value } }) => {
//         this.setState({ [name]: value });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();

//         this.props.onLogin(this.state);

//         this.setState({ email: '', password: '' });
//     };

//     render() {
//         const { email, password } = this.state;

//         return (
//             <div className={styles.loginDiv}>
//                 <h1 className={styles.loginHeader}>Login</h1>
//                 <form
//                     onSubmit={this.handleSubmit}
//                     autoComplete="off"
//                     className={styles.loginForm}
//                 >
//                     <label className={styles.loginLabel}>
//                         Email
//                         <input
//                             type="email"
//                             name="email"
//                             value={email}
//                             onChange={this.handleChange}
//                         />
//                     </label>
//                     <label className={styles.loginLabel}>
//                         Пароль
//                         <input
//                             type="password"
//                             name="password"
//                             value={password}
//                             onChange={this.handleChange}
//                         />
//                     </label>
//                     <button type="submit" className={styles.loginButton}>
//                         Войти
//                     </button>
//                 </form>
//             </div>
//         );
//     }
// }

// const mapDispatchToProps = {
//     onLogin: authOperations.login,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
