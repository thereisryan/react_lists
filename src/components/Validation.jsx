import React from 'react';

const Validation = (props) => {
  const tooShort = 5;
  const tooLong = 160;

  let validation = null;

  if (props.doesShow) {
    validation = (
        <p onChange={props.length}>{props.length <= tooShort && props.doesShow ? "too little content, spice it up!" :
            props.length >= tooLong ? "Too long, brief it up a bit!" :
                "It's like porridge, just right!"}</p>
    )
  }

  return (
      <div>
        {validation}
      </div>
  )
}

export default Validation;