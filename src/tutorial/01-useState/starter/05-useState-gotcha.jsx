import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue((prevState) => {
      const newState = prevState + 1;
      return newState;
    });
  };
  return (
    <>
      <h1>{value}</h1>

      <button onClick={handleClick} className="btn">increase</button>
    </>
  );
};

export default UseStateGotcha;
