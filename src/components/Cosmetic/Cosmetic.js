import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Cosmetic.css';
const Cosmetic = (props) => {
    const {name, id, price} = props.cosmetic;
    
    const addToCart = (id) => {
        addToDb(id);
    }
    const newAdd = () => addToCart(id);
    return (
        <div className='product'>
            <h2>Buy this:{name}</h2>
            <h3>The Index no is: {id}</h3>
            <h2>Price is :${price}</h2>
            <button onClick={()=>addToCart(id)}>Add To Cart</button>
           </div>
    );
};

export default Cosmetic;