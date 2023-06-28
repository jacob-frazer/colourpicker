import React from 'react';

const MobileOnly: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#EAF4FC',
  };

  const textContainerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const textStyle: React.CSSProperties = {
    color: '#0A3D6B',
    fontSize: '28px',
    fontWeight: 'lighter',
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h2 style={textStyle}>Sorry, but the colour.app is currently PC only.</h2>
      </div>
    </div>
  );
};

export default MobileOnly;