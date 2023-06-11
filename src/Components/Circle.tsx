interface CircleProps {
    colour: string;
    onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  }
  
  const Circle: React.FC<CircleProps> = ({ colour }) => {
    const circleStyle = {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: colour,
      margin: '10px',
      cursor: 'pointer',
    };
  
    return <div style={circleStyle}></div>;
  };
  
  export default Circle;