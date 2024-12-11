import React from 'react';

const CircleGradient = () => {
  return (
    <div
      className='size-40 rounded-full absolute -top-16 -right-16'
      style={{
        background: `
          linear-gradient(to right, 
            white 0%, white 10%, 
            #e5e7eb 10%, #e5e7eb 20%, 
            white 20%, white 30%, 
            #e5e7eb 30%, #e5e7eb 40%, 
            white 40%, white 50%, 
            #e5e7eb 50%, #e5e7eb 60%, 
            white 60%, white 70%, 
            #e5e7eb 70%, #e5e7eb 80%, 
            white 80%, white 90%, 
            #e5e7eb 90%, #e5e7eb 100%
          )
        `,
      }}
    />
  );
};

export default CircleGradient;
