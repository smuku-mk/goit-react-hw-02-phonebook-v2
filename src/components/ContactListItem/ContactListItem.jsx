import PropTypes from 'prop-types';

export const ContactListItem = ({ contacts }) => {
  return (
    <>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.array.isRequired,
};
