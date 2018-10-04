import React from 'react';

const Audio = ({dataKey, text}) => {
  return (
    <audio data-key={dataKey} src={`sounds/${text}.wav`} />
  )
};

export default Audio;