import React from 'react';

const ColorBar: React.FC = () => {
  return (
    <div className="w-full h-2 flex">
      <div className="flex-1 bg-green-500"></div>
      <div className="flex-1 bg-yellow-500"></div>
      <div className="flex-1 bg-red-500"></div>
    </div>
  );
};

export default ColorBar;