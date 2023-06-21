import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface CircleProps {
  colour: string;
  tick?: boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
}

const Circle: React.FC<CircleProps> = ({ colour, tick, onClick }) => {
  const circleStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: colour,
    margin: '10px',
    cursor: 'pointer',
    borderColor: 'black',
    borderWidth: '2px',
    borderStyle: 'solid',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const tickStyle: React.CSSProperties = {
    position: 'absolute',
    color: 'white',
    fontSize: '18px',
  };

  return (
    <span style={circleStyle} onClick={onClick}>
      {tick && <FaCheck style={tickStyle} />}
    </span>
  );
};

export default Circle;
