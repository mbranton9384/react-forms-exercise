import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (boxObj) => {
    setBoxes((boxes) => [...boxes, boxObj]);
  };

  const remove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };
  
  const add = (boxObj) => {
    console.log("Adding box:", boxObj);
    setBoxes((boxes) => [...boxes, boxObj]);
  };

  const boxComponents = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      backgroundColor={box.backgroundColor}
    />
  ));

  return (
    <div>
      <NewBoxForm createBox={add} />
      <div className="box-container">{boxComponents}</div>
    </div>
  );
};

export default BoxList;

