import React from 'react';
import { connect } from 'react-redux';
import * as operations from '../../Redux/contacts/operations';
import { getFilteredContacts } from '../../Redux/contacts/selectors';
import styles from './Contacts.module.css';

const ContactItem = ({ id, name, number, onRemove }) => {
    return (
        <li id={id}>
            <span className={styles.contactsLabel}>{name}</span>:{' '}
            <span className={styles.contactsLabel}>{number}</span>
            <button type="button" id={id} onClick={() => onRemove(id)}>
                Delete
            </button>
        </li>
    );
};

const Contacts = ({ contacts, onRemove }) => {
    return (
        <div className={styles.contactsDiv}>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <ContactItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        onRemove={onRemove}
                    />
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        contacts: getFilteredContacts(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    onRemove: (id) => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
