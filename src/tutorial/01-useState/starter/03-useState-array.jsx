import { useState } from 'react';
import {data} from  '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  return <div>
    {
      people.map((person) => {
        // console.log(people);
        const {id, name} = person
        
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })
    }
    <button type='button' className='btn'
    style={{ marginTop: '2rem' }}
    onClick={() => setPeople([])}
    >Clear</button>
  </div>;
};

export default UseStateArray;
