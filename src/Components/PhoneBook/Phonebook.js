import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import styles from './Phonebook.module.css';
import * as operations from '../../Redux/contacts/operations';
import { getContacts } from '../../Redux/contacts/selectors';

function PhoneBook() {
    // const [contact, setContact] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;

            default:
                return;
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleForm = (event) => {
        event.preventDefault();

        if (contacts.find((contact) => contact.name === name)) {
            return alert(`${name} is already in contacts.`);
        }

        dispatch(operations.addContact({ name, number }));

        reset();
    };

    return (
        <div className={styles.phoneDiv}>
            <h1 className={styles.phoneHeader}>Контакты</h1>
            <form onSubmit={handleForm} className="form">
                <label className={styles.label}>
                    Имя
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        id={nameInputId}
                    ></input>
                </label>
                <label className={styles.label}>
                    Номер
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={handleChange}
                        id={numberInputId}
                    ></input>
                </label>
                <button type="submit" className={styles.button}>
                    Добавить контакт
                </button>
            </form>
        </div>
    );
}

export default PhoneBook;

// class PhoneBook extends Component {
//     state = {
//         contacts: [],
//         name: '',
//         number: '',
//     };

//     nameInputId = shortid.generate();
//     numberInputId = shortid.generate();

//     handleChange = (event) => {
//         this.setState({
//             [event.currentTarget.name]: event.currentTarget.value,
//         });
//     };

//     handleForm = (event) => {
//         event.preventDefault();
//         const { name } = this.state;
//         const { contacts } = this.props;
//         if (contacts.find((contact) => contact.name === name)) {
//             return alert(`${name} is already in contacts.`);
//         }
//         // this.props.onSubmit({ id: shortid.generate(), ...this.state });
//         this.props.onSubmit({ ...this.state });
//         this.setState({
//             name: '',
//             number: '',
//         });
//     };

//     render() {
//         return (
//             <div className={styles.phoneDiv}>
//                 <h1 className={styles.phoneHeader}>Контакты</h1>
//                 <form onSubmit={this.handleForm} className="form">
//                     <label className={styles.label}>
//                         Имя
//                         <input
//                             type="text"
//                             name="name"
//                             value={this.state.name}
//                             onChange={this.handleChange}
//                             id={this.nameInputId}
//                         ></input>
//                     </label>
//                     <label className={styles.label}>
//                         Номер
//                         <input
//                             type="tel"
//                             name="number"
//                             value={this.state.number}
//                             onChange={this.handleChange}
//                             id={this.numberInputId}
//                         ></input>
//                     </label>
//                     <button type="submit" className={styles.button}>
//                         Добавить контакт
//                     </button>
//                 </form>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         contacts: getContacts(state),
//     };
// };

// const mapDispatchToProps = (dispatch) => ({
//     onSubmit: ({ name, number }) =>
//         dispatch(operations.addContact(name, number)),
// });
// const mapDispatchToProps = (dispatch) => ({
//     onSubmit: (contact) => dispatch(operations.addContact(contact)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);
