
import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function Cars() {

    const [cars, setCars] = useState([
        {title: 'Home Cars', id : 1},
        {title: 'Office Cars', id : 2},
        {title: 'Holidays Cars', id : 3}

    ])

    const addCar = ()=>{
      setCars([...cars, {title: 'new song', id: uuidv4()}])
    }
  return (
    <div className="cars-list">s
       <ul>
         {
             cars.map(car =>{
               return  <li key={car.id}>{car.title} </li>
             })
         }
       </ul>

       <button onClick={addCar}>Add Car</button>
    </div>
  );
}

export default Cars;
