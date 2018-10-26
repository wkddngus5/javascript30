import React from 'react';

const Item = ({ item, index, toggleItem }) => {
  return (
    <li>
      <input type="checkbox" data-index={index} id={"item" + index}
             checked={item.done ? 'checked' : ''}
             onChange={() => {toggleItem(index)}}
      />
      <label htmlFor={"item" + index}>{item.text}</label>
    </li>
  )
};

export default Item;
