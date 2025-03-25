import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(1));

  const [count, setCount] = useState(0);
  
  //Events Function
  const clickHandler = () => {
    setCount(count + 1)
  };

  const decreaseHandler = () => {
    setCount(count - 1)
  }

  return <div>
    <h3>Count: {count} time to click</h3>
    <button className="btn" onClick={clickHandler}>
      increase
    </button>
    <button className="btn" onClick={decreaseHandler}>
      decrease
    </button>
  </div>;
};

export default UseStateBasics;
