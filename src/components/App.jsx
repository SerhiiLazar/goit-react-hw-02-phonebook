import React, { Component } from 'react';
import Contacts from './Contacts';
import { nanoid } from 'nanoid';
import Section from './Section';
import Form from './Form';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = (data) => {
    const onContact = this.state.contacts.some(id => id.name === data.name);
    if (onContact) {
      alert(`Contact "${data.name}" is already exist.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data, id: nanoid() }]
    }))
  }

  deleteItem = (deletedId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({id}) => id !== deletedId)
    }))
  }

  render() {
    const {contacts} = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <Contacts 
            contacts={contacts}
            onClickDelete={this.deleteItem}
          />
        </Section>
      </div>
    );
  }
}

export default App;
