import { ContactItem } from '../ContactItem/ContactItem';
import { ContactList } from './ContactsList.styled';

import { getContacts, getFilter } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  return (
    <div>
      <ContactList>
        {contacts.length === 0 && <p>No contacts added...</p>}
        {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <ContactItem key={contact.id} item={contact} />
          ))}
      </ContactList>
    </div>
  );
};
