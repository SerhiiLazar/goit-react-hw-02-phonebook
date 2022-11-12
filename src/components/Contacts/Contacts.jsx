import React, { Component } from 'react';
import Notification from 'components/Notification';
import Input from 'components/Input';
// import css from './Contacts.module.css';

class Contacts extends Component {
  render() {
    const { imputChange } = this.props;
    const { onClickDelete } = this.props;
    const { filter, contacts } = this.props;
    const mormolizedFilter = filter.toLowerCase();
    const getFilter = contacts.filter(onFilter =>
      onFilter.name.toLowerCase().includes(mormolizedFilter)
    );

    return (
      <div>
        <Input
          label="Find contacts by name"
          value={filter}
          onChange={imputChange}
          type="text"
          name="filter"
        />

        {!getFilter.length ? (
          <Notification message="Contact list is empty." />
        ) : (
          <ul>
            {getFilter.map(({ id, name, number }) => (
              <li key={id}>
                <span>{name}</span>
                <span>{number}</span>
                <button type="button" onClick={() => onClickDelete(id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Contacts;
