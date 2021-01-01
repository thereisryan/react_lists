import React from 'react';


const Char = (props) => {
  return(
  <div>
    <p {...props}>{props.children}</p>
  </div>
  )
}

export default Char;