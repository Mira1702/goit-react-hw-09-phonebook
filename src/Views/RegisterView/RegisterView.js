import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as authOperations from '../../Redux/auth/auth-operations';
import styles from './RegisterView.module.css';

function RegisterView() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // const handleChange = (event) => {
    //     const { name, value } = event.currentTarget;

    //     switch (name) {
    //         case 'name':
    //             setName(value);
    //             break;

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
        setName('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        // const user = { name, email, password };
        // dispatch(authOperations.register(user));

        reset();
    };

    return (
        <div className={styles.registerDiv}>
            <h1 className={styles.registerHeader}>Страница регистрации</h1>
            <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className={styles.registerForm}
            >
                <label className={styles.registerLabel}>
                    Логин
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </label>
                <label className={styles.registerLabel}>
                    Пароль
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </label>
                <label className={styles.registerLabel}>
                    Имя
                    <input
                        type="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </label>
                <button type="submit" className={styles.registerButton}>
                    Отправить
                </button>
            </form>
        </div>
    );
}

export default RegisterView;

// class RegisterView extends Component {
//     state = {
//         name: '',
//         email: '',
//         password: '',
//     };

//     handleChange = ({ target: { name, value } }) => {
//         this.setState({ [name]: value });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();

//         this.props.onRegister(this.state);

//         this.setState({ name: '', email: '', password: '' });
//     };

//     render() {
//         const { name, email, password } = this.state;

//         return (
//             <div className={styles.registerDiv}>
//                 <h1 className={styles.registerHeader}>Страница регистрации</h1>
//                 <form
//                     onSubmit={this.handleSubmit}
//                     autoComplete="off"
//                     className={styles.registerForm}
//                 >
//                     <label className={styles.registerLabel}>
//                         Логин
//                         <input
//                             type="email"
//                             name="email"
//                             value={email}
//                             onChange={this.handleChange}
//                         />
//                     </label>
//                     <label className={styles.registerLabel}>
//                         Пароль
//                         <input
//                             type="password"
//                             name="password"
//                             value={password}
//                             onChange={this.handleChange}
//                         />
//                     </label>
//                     <label className={styles.registerLabel}>
//                         Имя
//                         <input
//                             type="name"
//                             name="name"
//                             value={name}
//                             onChange={this.handleChange}
//                         />
//                     </label>
//                     <button type="submit" className={styles.registerButton}>
//                         Отправить
//                     </button>
//                 </form>
//             </div>
//         );
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
//     onRegister: (data) => dispatch(authOperations.register(data)),
// });

// const mapDispatchToProps = {
//     onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);
