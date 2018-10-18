import React from 'react';

const Item = ({text, checked, onClick}) => {
  return (
    <div className="item">
      <input type="checkbox" checked={checked} onChange={onClick}/>
      <p>{text}</p>
    </div>
  );
};

export default Item;