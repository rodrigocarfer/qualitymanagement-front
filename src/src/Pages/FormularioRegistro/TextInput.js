import React from 'react';

const TextInput = (props) => {
  return (
    <div className="form-group">
      <p><b> {props.placeholder}: </b></p>
      <input type="text" {...props} placeholder='' className="form-control"/>    
    </div>
  );
}

export default TextInput;