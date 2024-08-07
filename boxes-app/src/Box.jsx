import React from 'react';

const Box = ({ id, width, height, backgroundColor, handleRemove }) => {
  const remove = () => handleRemove(id);

  return (
    <div className="box">
      <div
        style={{
          width: `${width}em`,
          height: `${height}em`,
          backgroundColor
        }}
      ></div>
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Box;


