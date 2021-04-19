import { Component } from 'react';
import Phonebook from '../../Components/PhoneBook/Phonebook';
import Contacts from '../../Components/Contacts/Contacts';
import Filter from '../../Components/Filter/Filter';

class PhonebookView extends Component {
    render() {
        return (
            <div>
                <Phonebook />
                <Filter />
                <Contacts />
            </div>
        );
    }
}

export default PhonebookView;
