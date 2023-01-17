import React, { useState } from 'react';

const LeftSidebar = ({ width, isOpen }) => {
  const [visible, setVisible] = useState(isOpen);
  const positionLeft = visible ? 0 : -width * 0.95;

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
    

    <div 
      className='outer-div'
      style={{
        position: 'fixed',
        left: positionLeft,
        top: 0,
        bottom: 0,
        width: width,
        height: '100vh',
        backgroundColor: 'green',
        transition: 'left 0.3s ease-out',
        overflow: 'hidden'
      }}
    >
      
      
      <div style={{ height: '100%', width: '95%', display: 'inline-block' }}>
        Left Div
      </div>

      <div 
        style={{ 
          height: '100%', 
          width: '5%', 
          display: 'inline-block',
          backgroundColor: 'red'
        }}
        onClick={toggleVisibility}
        >
        Right Div
      </div>

    </div>
    </>
  );
};

export default LeftSidebar;