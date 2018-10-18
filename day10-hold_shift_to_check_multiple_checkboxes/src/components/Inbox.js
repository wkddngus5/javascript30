import React, { Component } from 'react';
import './Inbox.css';
import Item from './Item';

class Inbox extends Component {
  render() {
    const { items, click }  = { ...this.props };
    const itemList = items.map( (item, index) => {
      return (
        <Item
          key={index}
          text={item.text}
          checked={item.checked}
          onClick={e => click(e, index)}
        />
      )
    });

    return (
      <div className="inbox">
        {itemList}
      </div>
    )
  }
}

export default Inbox;