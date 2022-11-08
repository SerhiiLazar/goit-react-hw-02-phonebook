import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import Container from './Container';
import Form from './Form';


class App extends Component {
  state = {
    contacts: []
  };

  formSubmitHandler = (data) => {
    console.log(data);
   
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />
      </Container>
    );
  }
}

export default App;
