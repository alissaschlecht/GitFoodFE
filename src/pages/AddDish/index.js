import React from 'react';
import { Link } from "react-router-dom";

const AddDish = () => {
  return(
    <div>
      <div className='container'>
        <p>Add a Dish</p>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}

export default AddDish;