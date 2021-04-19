import Phonebook from '../../Components/PhoneBook/Phonebook';
import Contacts from '../../Components/Contacts/Contacts';
import Filter from '../../Components/Filter/Filter';

function PhonebookView() {
    return (
        <div>
            <Phonebook />
            <Filter />
            <Contacts />
        </div>
    );
}

// class PhonebookView extends Component {
//     render() {
//         return (
//             <div>
//                 <Phonebook />
//                 <Filter />
//                 <Contacts />
//             </div>
//         );
//     }
// }

export default PhonebookView;
