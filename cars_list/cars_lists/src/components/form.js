
import React, { useContext,useState} from 'react';
import {CarsContext} from './CarsContext';


function Form(){
 
    const {addCar} = useContext(CarsContext);

    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        addCar(title, owner);
        setTitle("");
        setOwner("")
    }
     
 return( 
           
  <form onSubmit={handleSubmit}>
  <label > Car Name </label>
  <input type="text" value={title} required onChange={(e)=> setTitle(e.target.value)}  /> 

  <label > Car Owner </label>
  <input type="text" value={owner}required onChange={(e)=> setOwner(e.target.value)}  /> 

  <button type="submit" value='add car'> Add</button>
 </form> 
   )

}

export default Form