import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John Doe",
    age: 20,
    hobby: 'basketball'
  })

  const displayPerson = () => {
    setPerson({...person, name: 'alireza'})
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoy: {person.hobby}</h3>
      <button type="button" className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};

export default UseStateObject;
