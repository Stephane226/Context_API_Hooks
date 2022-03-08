
import React, {useState} from 'react';

function Cars() {

    const [cars, setCars] = useState([
        {title: 'Home Cars', id : 1},
        {title: 'Office Cars', id : 2},
        {title: 'Holidays Cars', id : 3}

    ])
  return (
    <div className="song-list">s
       <ul>
         {
             cars.map(car =>{
               return  <li key={car.id}>{car.title} </li>
             })
         }
       </ul>
    </div>
  );
}

export default Cars;
