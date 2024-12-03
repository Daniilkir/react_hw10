import { nanoid } from 'nanoid';
import './App.css';
import React, { Component } from 'react';
import { ContactForm } from './components/contatctForm/contactsForm';
import { ContactList } from './components/contactList/contacsList';
import { Title, MinTitle, Finder } from './AppStyled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  addContact = (name, number) => {
    const contact = { id: nanoid(), name, number };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  handleFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Title>Телефонна книга</Title>
        <ContactForm onSubmit={this.addContact} />
        <Finder
          placeholder="Знайти контакт"
          onChange={this.handleFilter}
          value={filter}
        />
        <MinTitle>Contacts</MinTitle>
        <ContactList
          data={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
