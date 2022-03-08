
import React, {useState} from 'react';

function CarForm({addCar}) {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        addCar(title);
        setTitle('')
    }
  return (
    <form onSubmit={handleSubmit}>
     <label > Car Name </label>
     <input type="text" value={title}required onChange={(e)=> setTitle(e.target.value)}  /> 
     <button type="submit" value='add car'> Add</button>
    </form>
  );
}

export default CarForm;
