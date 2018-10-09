import React, {Component} from 'react';
import './PanelList.css';

import Panel from './Panel';

class PanelList extends Component {
  render() {
    const {panels, onClick} = this.props;

    return (
      <div className="panels">
        {panels.map((panel, index) => {
          return <Panel
            key={index}
            index={index}
            {...panel}
            onClick={onClick}
          />
        })}
      </div>
    );
  }
}


export default PanelList;
