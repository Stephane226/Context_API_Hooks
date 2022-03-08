
import React, {useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import CarForm from './carsForm'

function Cars() {

    const [cars, setCars] = useState([
        {title: 'Home Cars', id : 1},
        {title: 'Office Cars', id : 2},
        {title: 'Holidays Cars', id : 3}

    ])

    const addCar = (title)=>{
      setCars([...cars, {title: title, id: uuidv4()}])
    }

    useEffect( ()=>{
      console.log("rendered")
    },[cars])
    
  return (
    <div className="cars-list">s
       <ul>
         {
             cars.map(car =>{
               return  <li key={car.id}>{car.title} </li>
             })
         }
       </ul>

      <CarForm addCar={addCar}/>
    </div>
  );
}

export default Cars;
