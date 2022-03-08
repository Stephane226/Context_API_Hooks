import React, {useContext} from 'react'
import {CarsContext} from './CarsContext'

function Navbar() {

    const {cars} = useContext(CarsContext)

  return (
    <div className="nav-bar">
    <h2>  Cars List</h2>
    <p>You have  {cars.length} cars in the garage.</p>

    </div>
  );
}

export default Navbar;
