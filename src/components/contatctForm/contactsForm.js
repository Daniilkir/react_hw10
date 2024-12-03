import React, { Component } from 'react';
import { Form, Input, Button } from './contactsFormStyle';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;

    if (name && number) {
      this.props.onSubmit(name, number);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          <p> Ім'я:</p>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <p>Номер телефону:</p>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        <Button type="submit">Додати контакт</Button>
      </Form>
    );
  }
}
