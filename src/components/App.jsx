import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { contacts } = this.state;
    const form = evt.currentTarget;
    const inputName = form.elements.name.value;
    const inputNumber = form.elements.number.value;

    this.setState({
      contacts: [
        ...contacts,
        { id: nanoid(), name: inputName, number: inputNumber },
      ],
    });

    form.reset();
  };

  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  contacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    // const { contacts } = this.state;

    return (
      <section>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <span>Number</span>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>
          <span>Find contacts by name</span>
          <input type="text" name="filter" onChange={this.handleFilter} />
        </label>
        <ul>
          {this.contacts().map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
