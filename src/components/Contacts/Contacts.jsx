import React, {Component} from "react";
import Notification from "components/Notification";
import Input from 'components/Input';


class Contacts extends Component {

    state = {
        filter: '',
    };

    handleInputChange = (e) => {
        this.setState({ filter: e.target.value });
      };

    render() {
        const {filter} = this.state;
        const { contacts, onClickDelete } = this.props;
        const filterContacts = contacts.filter(id => id.name.includes(filter))
    
        return (
          <div >
            <Input
              label='Find contacts by name'
              value={filter}
              onChange={this.handleInputChange}
              type='text'
              name='filter'
            />
    
            {!filterContacts.length
              ? <Notification message='Contact list is empty.' />
              : <ul>
                {filterContacts.map(({ id, name, number }) => (
                  <li key={id}>
                    <span >{name}</span>
                    <span>{number}</span>
                    <button
                      type='button'
                      onClick={() => onClickDelete(id)}
                    >Delete</button>
                  </li>
                ))}
              </ul>}
          </div>
        );
      }


}

export default Contacts;