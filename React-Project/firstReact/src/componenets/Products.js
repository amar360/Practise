import React from 'react';

function Products(props) {
 
    return (
      <div>
        <h1>{props.products.id}. {props.products.name}</h1>
        <h2>price is: ${props.products.price}</h2>
        <h3>product description: {props.products.description}</h3>
      </div>
    )
  }
  
  export default Products;