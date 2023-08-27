import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { ContactListItem } from './ContactListItem';
import { Filter } from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { contacts } = this.state;
    const form = evt.currentTarget;
    const { name, number } = form.elements;

    this.setState({
      contacts: [
        ...contacts,
        { id: nanoid(), name: name.value, number: number.value },
      ],
    });

    form.reset();
  };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  handleDisplayContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterChange} />
        <ContactList>
          <ContactListItem contacts={this.handleDisplayContacts()} />
        </ContactList>
      </>
    );
  }
}

export default App;
