import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { contacts } = this.state;

    const form = evt.currentTarget;
    const inputName = form.elements.name.value;
    this.setState({
      contacts: [...contacts, { id: nanoid(), name: inputName }],
    });

    form.reset();
  };

  render() {
    const { contacts } = this.state;

    return (
      <section>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
