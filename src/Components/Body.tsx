import React, { useState, useEffect } from 'react';

import CombinedColour from './ColourSelect';
import BodyText from './BodyText';

interface TransitionContainerProps {
  children: React.ReactNode;
}

const TransitionContainer: React.FC<TransitionContainerProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const numChildren = React.Children.count(children);

  const handleClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === numChildren - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClick();
    }, 5000); // Auto transition every 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]); // Reset the timer whenever activeIndex changes

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '50%',
  };

  const contentStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    transition: 'opacity 0.3s ease-in-out', // Smooth fade in/out transition
  };

  const hiddenContentStyle: React.CSSProperties = {
    opacity: 0,
    pointerEvents: 'none', // Hide the hidden content from interaction
  };

  const handleTransitionEnd = () => {
    // Reduce the opacity of the previous content to 0 after the transition
    contentStyle.opacity = 1;
  };

  return (
    <div style={containerStyle} onClick={handleClick}>
      {React.Children.map(children, (child, index) => (
        <div
          style={{
            ...contentStyle,
            ...hiddenContentStyle,
            opacity: index === activeIndex ? 1 : 0,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

const Body: React.FC = () => {
  const bodyStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
  };

  return (
    <div style={bodyStyle}>
      <CombinedColour />
      <TransitionContainer>
          <BodyText text="your home for beautiful palettes" />
          <BodyText text="play around and generate perfect colours" />
          <BodyText text="the app changes colours as you do" />
          <BodyText text="customise the settings in the bottom left" />
          <BodyText text="enjoy" />
      </TransitionContainer>
    </div>
  );
};

export default Body;
