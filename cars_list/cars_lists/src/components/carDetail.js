

import React, { useContext} from 'react';
import {CarsContext} from './CarsContext'

function CarDetail({car}){
     
    const {removeCar} = useContext(CarsContext);
    
    return ( 
    <div> 
            <li onClick={()=> removeCar(car.id)}>
               <div className="title"> {car.title}</div>
               <div className="owner"> {car.owner}</div>
            </li>
    </div>
    ) 

}

export default CarDetail