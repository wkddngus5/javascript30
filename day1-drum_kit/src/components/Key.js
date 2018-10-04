import React from 'react';

const Key = ({dataKey, kbd, text, playing, onClick}) => {
  const isPlaying = playing ? 'playing' : '';

  return (
    <div data-key={dataKey} className={`key ${isPlaying}`} onClick={() => {onClick(dataKey)}}>
      <kbd>{kbd}</kbd>
      <span className="sound">{text}</span>
    </div>
  )
};

export default Key;