interface CircleProps {
    colour: string;
    onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined;
  }
  
  const Circle: React.FC<CircleProps> = ({ colour, onClick }) => {
    const circleStyle = {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: colour,
      margin: '10px',
      cursor: 'pointer',
      borderColor: 'black',
      borderWidth: '2px',
      borderStyle: 'solid',
    };
  
    return <div style={circleStyle} onClick={onClick}></div>;
  };
  
  export default Circle;