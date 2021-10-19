import React, { Component } from "react";

// Child Component

const FRInput = React.forwardRef(( props , ref ) => {
  return (
   <div>
    <input type = 'text' ref = {ref} />
  </div>
  )
});

export default FRInput;
