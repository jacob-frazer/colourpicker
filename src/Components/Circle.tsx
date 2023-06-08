interface CircleProps {
    colour: string;
  }
  
  const Circle: React.FC<CircleProps> = ({ colour }) => {
    const circleStyle = {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      backgroundColor: colour,
      margin: '10px',
    };
  
    return <div style={circleStyle}></div>;
  };
  
  export default Circle;