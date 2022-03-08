import React, {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CarsContext = createContext()
const CarContextProvider = (props) =>{

    const [cars, setCars] = useState([
        { title: 'Mercedesse', owner:'Masaaki', id:1,},
        { title: 'Toyota', owner:'Stephane', id:2,},
        { title: 'Range Rover', owner:'Benon', id:3,},
    ]);

    const addCar = (title, owner)=>{
        setCars([...cars,  { title: title, owner:owner, id:uuidv4(),}])
    }

    const removeCar = (id)=>{
        setCars( cars.filter(car=>car.id !== id))
    }

    return(
        <CarsContext.Provider value={{cars,addCar,removeCar}}>
            {props.children}
        </CarsContext.Provider>
    )

}
export default CarContextProvider;