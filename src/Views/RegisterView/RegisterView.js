import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as authOperations from '../../Redux/auth/auth-operations';
import styles from './RegisterView.module.css';

function RegisterView() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'email':
                setEmail(value);
                break;

            case 'password':
                setPassword(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { name, email, password };
        dispatch(authOperations.register(user));

        reset();
    };

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
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
                        onChange={handleChange}
                    />
                </label>
                <label className={styles.registerLabel}>
                    Пароль
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <label className={styles.registerLabel}>
                    Имя
                    <input
                        type="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
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
