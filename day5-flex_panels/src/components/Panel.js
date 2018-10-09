import React, {Component} from 'react';
import ReactDom from 'react-dom';

import './Panel.css';

class Panel extends Component {
  componentDidMount() {
    ReactDom.findDOMNode(this).addEventListener('transitionend', e => {
      if (e.propertyName.includes('flex') && e.target.classList.contains('open')) {
        e.target.classList.add('open-active');
      }
    })
  }

  render() {
    const { index, top , middle, bottom, image, open, onClick } = this.props;

    const style = {
      backgroundImage:`url(${image})`
    };

    const openValue = open ? 'open' : '';
    return (
      <div className={`panel ${openValue}`} style={style} onClick={() => {onClick(index)}}>
        <p>{top}</p>
        <p>{middle}</p>
        <p>{bottom}</p>
      </div>
    );
  }
}

export default Panel;
