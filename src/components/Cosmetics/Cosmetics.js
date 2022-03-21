import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
    const cosmetics = [
        {
          "id": "62381defb93793409a796f84",
          "price": 113,
          "name": "Berg French"
        },
        {
          "id": "62381def7bab44b9e9df56f1",
          "price": 180,
          "name": "Latisha Ellison"
        },
        {
          "id": "62381def509949f35555e26f",
          "price": 500,
          "name": "Greta Delgado"
        },
        {
          "id": "62381defda5718e8812e6c8e",
          "price": 165,
          "name": "Evans May"
        },
        {
          "id": "62381defa8b2fcec754caa74",
          "price": 491,
          "name": "Tasha Monroe"
        },
        {
          "id": "62381defa06bbf9480b9516f",
          "price": 258,
          "name": "Hansen Grimes"
        }
      ]
    return (
        <div>
         <h1>Welcome to my Cosmetics store !!</h1>
         {
             cosmetics.map(cosmetic=><Cosmetic 
                key={cosmetic.id}
                cosmetic={cosmetic}>
              </Cosmetic>)
         }
        </div>
    );
};

export default Cosmetics;