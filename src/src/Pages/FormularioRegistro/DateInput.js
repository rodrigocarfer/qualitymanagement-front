import React from 'react';

const DateInput = (props) => {
  return (
    <div className="form-group">
      <p><b> {props.placeholder}: </b></p>
      <input type="datetime-local" {...props} placeholder='' className="form-control" />
    
    </div>
  );
}

export default DateInput;