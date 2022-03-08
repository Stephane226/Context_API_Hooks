import React, { useContext} from 'react';
import {CarsContext} from './CarsContext';
import CarDetail from './carDetail'

function CarsList(){
     
    const {cars} = useContext(CarsContext);
    
    return cars.length? ( <div className='car-list'> 
            <ul>
                {
                    cars.map( car => { 
                        return < CarDetail  car={car} key={car.id}/>
                    } )
                }
            </ul>
    </div>) : (<div>No Cars In The Garage</div>)

}

export default CarsList